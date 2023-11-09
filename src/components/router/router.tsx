import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/home/home'));
const Details = lazy(() => import('../../pages/details/details'));
const Error = lazy(() => import('../../pages/errorpage/errorpage'));

export function Router() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/details/:name" element={<Details></Details>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
