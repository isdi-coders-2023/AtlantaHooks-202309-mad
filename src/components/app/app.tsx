import { Filter } from '../filter/filter';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';

export function App() {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <List></List>
      <Footer></Footer>
    </>
  );
}
