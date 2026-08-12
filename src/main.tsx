import { createRoot } from "react-dom/client";
import "./index.scss";
import { StrictMode } from "react";
import AppProduct from "./components/AppProduct.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProduct />
    </QueryClientProvider>
  </StrictMode>,
);
