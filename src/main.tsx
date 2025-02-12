import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth-config";
import router from "./router";
import "./index.css";
import { SidebarProvider } from "./context/SidebarCtx";
import { ApiProvider } from "./context/ApiContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
        <ApiProvider>
          {" "}
          {/* Envuelve la app con ApiProvider */}
          <RouterProvider router={router} />
        </ApiProvider>
      </QueryClientProvider>
    </SidebarProvider>
  </Auth0Provider>
);
