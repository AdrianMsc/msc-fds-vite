import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import IconRefresh from './Icons/IconRefresh';

interface ProtectedRouteProps {
  allowAccess?: (user: any) => boolean;
  redirectTo?: string;
}

const ProtectedRoute = ({
  allowAccess = (user) => !!user, // Defaults to just requiring authentication
  redirectTo = '/',
}: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-off_white">
        <IconRefresh addClass="animate-spin w-10 h-10 text-primary" />
      </div>
    );
  }

  // Check if unauthenticated or fails custom logic (like role === 'admin')
  if (!user || !allowAccess(user)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />; // Outlet renders the child routes
};

export default ProtectedRoute;
