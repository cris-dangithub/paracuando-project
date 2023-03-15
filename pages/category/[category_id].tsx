import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  return (
    <div>
      <h1 className="text-2xl">
        {' '}
        this page is{' '}
        <span className="text-app-red text-6xl">{category_id}</span>
      </h1>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
