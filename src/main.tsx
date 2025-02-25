import './index.css';
import { ApiProvider } from './context/ApiContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './auth-config';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { SidebarProvider } from './context/SidebarCtx';
import { store, persistor } from './redux/store';
import router from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Auth0Provider
				domain={authConfig.domain}
				clientId={authConfig.clientId}
				authorizationParams={{
					redirect_uri: window.location.origin
				}}
			>
				<QueryClientProvider client={queryClient}>
					<SidebarProvider>
						<ApiProvider>
							{' '}
							{/* Envuelve la app con ApiProvider */}
							<RouterProvider router={router} />
							{/* ReactQueryDevtools */}
							<ReactQueryDevtools />
						</ApiProvider>
					</SidebarProvider>
				</QueryClientProvider>
			</Auth0Provider>
		</PersistGate>
	</Provider>
);
