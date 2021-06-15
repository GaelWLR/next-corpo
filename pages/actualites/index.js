import ArticleCard from '../../components/ArticleCard';
import { client } from '../../services/contentful';

export default function News({ articles }) {
  return (
    <div className='flex-grow'>
      <div className='container grid grid-cols-3 gap-2 mx-auto'>
        {articles.map(article => (
          <ArticleCard article={article} key={article.fields.slug} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: 'article' });

  return {
    props: {
      articles: items,
    },
    revalidate: 1,
  };
}
