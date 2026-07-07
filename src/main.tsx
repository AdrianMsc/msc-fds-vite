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
import ErrorBoundary from './components/ErrorBoundary';

const envName = import.meta.env.DEV ? 'DEVELOPMENT (Local)' : 'PRODUCTION (Vercel)';
const envColor = import.meta.env.DEV ? '#3498db' : '#2ecc71';

console.log(
  `%c MSC Fuel Design System %c ${envName} `,
  'background: #34495e; color: #fff; border-radius: 3px 0 0 3px; padding: 2px 5px; font-weight: bold;',
  `background: ${envColor}; color: #fff; border-radius: 0 3px 3px 0; padding: 2px 5px; font-weight: bold;`,
);

fetchCsrfToken().finally(() => {
  createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
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
                <RouterProvider router={router} />
              </ApiProvider>
            </SidebarProvider>
          </AuthProvider>
        </Auth0Provider>
      </Provider>
    </ErrorBoundary>,
  );
});
