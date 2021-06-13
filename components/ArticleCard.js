import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

function ArticleCard({ article }) {
  const { title, slug, thumbnail } = article.fields;

  return (
    <Link href={`/actualites/${slug}`}>
      <div className='flex flex-col border rounded-lg'>
        <div className='relative h-48'>
          <Image
            src={'https:' + thumbnail.fields.file.url}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded-t-lg'
          />
        </div>
        <div className='p-2'>
          <span className='text-2xl font-bold'>{title}</span>
        </div>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    fields: PropTypes.shape().isRequired,
  }).isRequired,
};

export default ArticleCard;
