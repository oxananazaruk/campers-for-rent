import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GlobalStyle } from '../../GlobalStyles';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
