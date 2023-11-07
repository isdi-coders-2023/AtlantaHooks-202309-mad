import { getCountries } from '../../services/repo';
import { Filter } from '../filter/filter';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
export function App() {
  const contries = getCountries();
  return (
    <>
      <Header></Header>
        console.log(countries);
      <Footer></Footer> 
    </>
  )
}
