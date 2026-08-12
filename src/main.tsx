import { createRoot } from "react-dom/client";
import "./index.scss";
import { StrictMode } from "react";
import AppProduct from "./components/AppProduct.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProduct />
      <TanStackDevtools
        config={{ defaultOpen: true }}
        plugins={[
          {
            name: "form",
            render: <FormDevtoolsPanel />,
            defaultOpen: true,
          },
        ]}
      />
    </QueryClientProvider>
  </StrictMode>,
);
