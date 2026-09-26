import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/instrument-sans/wght.css";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource/ibm-plex-mono/400.css";

import "./assets/stylesheets/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
