import { createRoot } from "react-dom/client";
import "./index.scss";
import { StrictMode } from "react";
import AppProduct from "./components/AppProduct.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProduct />
  </StrictMode>,
);
