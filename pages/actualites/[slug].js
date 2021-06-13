import { client } from '../../services/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Article({ article }) {
  const { featuredImage, title, content } = article.fields;

  return (
    <div className='container flex-grow mx-auto mt-2'>
      <div className='text-center'>
        <div className='relative h-72'>
          <Image
            src={'https:' + featuredImage.fields.file.url}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <h2 className='m-4 text-2xl font-bold'>{title}</h2>
      </div>

      <div className='py-4'>
        <div>{documentToReactComponents(content)}</div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'article',
  });

  const paths = items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { article: items[0] },
    revalidate: 300,
  };
}
