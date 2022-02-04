import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';
import Navbar from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

const AdminRoutes = () => {
  const { user } = useUser();

  return user ? (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoutes;