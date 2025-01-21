import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth-config";
import router from "./router";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </QueryClientProvider>
  </Auth0Provider>
);
