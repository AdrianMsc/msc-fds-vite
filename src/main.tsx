import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth-config";
import router from "./router";
import "./index.css";
import { SidebarProvider } from "./context/SidebarCtx";
import { ApiProvider } from "./context/ApiContext";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <SidebarProvider>
            <ApiProvider>
              {" "}
              {/* Envuelve la app con ApiProvider */}
              <RouterProvider router={router} />
            </ApiProvider>
          </SidebarProvider>
        </QueryClientProvider>
      </Auth0Provider>
    </PersistGate>
  </Provider>
);
