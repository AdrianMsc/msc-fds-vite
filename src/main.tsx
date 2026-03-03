import './index.css';
import { ApiProvider } from './context/ApiContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './context/AuthContext';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { SidebarProvider } from './context/SidebarCtx';
import { store } from './redux/store';
import router from './router';
import { fetchCsrfToken } from './lib/api';

fetchCsrfToken().finally(() => {
  createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        }}
      >
        <AuthProvider>
          <SidebarProvider>
            <ApiProvider>
              {' '}
              {/* Envuelve la app con ApiProvider */}
              <RouterProvider router={router} />
              {/* ReactQueryDevtools */}
            </ApiProvider>
          </SidebarProvider>
        </AuthProvider>
      </Auth0Provider>
    </Provider>,
  );
});
