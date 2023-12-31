import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  // idol, loading, submitting
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header></Header>
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl overflow-hidden">
          <Outlet />
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
