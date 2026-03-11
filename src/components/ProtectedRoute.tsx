import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, User } from '../context/AuthContext';
import MscSpinner from './MscSpinner';

interface ProtectedRouteProps {
  allowAccess?: (user: User) => boolean;
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
        <MscSpinner />
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
