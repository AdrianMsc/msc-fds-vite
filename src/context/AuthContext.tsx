import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { api } from '../lib/api';

interface User {
  id: number;
  email: string;
  name: string;
  picture: string;
  role: string;
  provider: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (options?: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    user: auth0User,
    isAuthenticated: isAuth0Authenticated,
    isLoading: isAuth0Loading,
    getAccessTokenSilently,
    loginWithRedirect,
    logout: auth0Logout,
  } = useAuth0();

  const [user, setUser] = useState<User | null>(null);
  const [isSessionLoading, setIsSessionLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const establishSession = async () => {
      // If Auth0 is still loading, wait.
      if (isAuth0Loading) return;

      // If Auth0 says we are not logged in, ensure we clear local state
      if (!isAuth0Authenticated) {
        if (isMounted) {
          setUser(null);
          setIsSessionLoading(false);
        }
        return;
      }

      let token: string;
      try {
        // 1. Get token from Auth0
        token = await getAccessTokenSilently();
      } catch (tokenError) {
        console.error('[Auth] Step 1 FAILED — getAccessTokenSilently threw:', tokenError);
        if (isMounted) {
          setUser(null);
          setIsSessionLoading(false);
        }
        return;
      }

      try {
        // 2. Exchange token for backend session cookie
        await api.post(
          '/auth/login-frontend',
          {
            email: auth0User?.email,
            name: auth0User?.name,
            picture: auth0User?.picture,
            // SECURITY FIX: User roles are determined securely by the backend via JWT claims.
            // We no longer send a requested role from the client.
          },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } catch (postError) {
        console.error('[Auth] Step 2 FAILED — POST /auth/login-frontend threw:', postError);
        if (isMounted) {
          setUser(null);
          setIsSessionLoading(false);
        }
        return;
      }

      try {
        // 3. Cookie is set. Now fetch the actual user profile from the backend
        const meResponse = await api.get('/auth/me');
        if (meResponse.data.authenticated && isMounted) {
          setUser(meResponse.data.user);
        }
      } catch (meError) {
        console.error('[Auth] Step 3 FAILED — GET /auth/me threw:', meError);
        if (isMounted) setUser(null);
      } finally {
        if (isMounted) setIsSessionLoading(false);
      }
    };

    establishSession();

    return () => {
      isMounted = false;
    };
  }, [isAuth0Authenticated, isAuth0Loading, getAccessTokenSilently]);

  // Handle global 401 events
  useEffect(() => {
    const handleUnauthorized = () => {
      setUser(null);
      // Optional: automatically redirect to login
      // loginWithRedirect();
    };

    window.addEventListener('auth-unauthorized', handleUnauthorized);
    return () => window.removeEventListener('auth-unauthorized', handleUnauthorized);
  }, [loginWithRedirect]);

  const handleLogin = (options?: any) => loginWithRedirect(options);

  const handleLogout = async () => {
    // 1. Destroy backend session cookie
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.warn('Backend logout failed', e);
    }
    // 2. Clear Auth0 state
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const isLoading = isAuth0Loading || isSessionLoading;

  return (
    <AuthContext.Provider value={{ user, isLoading, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
