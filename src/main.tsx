import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";
import "./index.css";

import { App } from "./App";
import { Empty } from "./placeholder/empty";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Empty title="Select PPI medication to continue" description="Prescription must be selected to search in Pharmetika" icon="/icons/search.svg" />
    </div>
  </StrictMode>
);
