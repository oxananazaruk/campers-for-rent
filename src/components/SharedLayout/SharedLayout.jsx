import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GlobalStyle } from '../../GlobalStyles';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
