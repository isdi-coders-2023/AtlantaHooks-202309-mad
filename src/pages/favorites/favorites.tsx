import { PrivateFilter } from '../../components/privateFilter/private_filter';
import { PrivateList } from '../../components/privateList/list_private';

export default function HomePage() {
  return (
    <>
      <PrivateFilter></PrivateFilter>
      <PrivateList></PrivateList>
    </>
  );
}
