import "./index.css";
import { ApiProvider } from "./context/ApiContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth-config";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarCtx";
import { store } from "./redux/store";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <SidebarProvider>
        <ApiProvider>
          {" "}
          {/* Envuelve la app con ApiProvider */}
          <RouterProvider router={router} />
          {/* ReactQueryDevtools */}
        </ApiProvider>
      </SidebarProvider>
    </Auth0Provider>
  </Provider>
);
