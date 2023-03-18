import { useRouter } from 'next/router';
import { Layout } from '../../../components/layout/Layout';
import { NextPageWithLayout } from '../../page';

const Details: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id, event_id } = router.query;
  return <div>category_id/event_id</div>;
};

export default Details;

Details.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
