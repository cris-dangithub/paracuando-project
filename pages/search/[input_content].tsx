import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { input_content } = router.query;

  return <div>You are searching: {input_content}</div>;
};

export default SearchPage;

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
