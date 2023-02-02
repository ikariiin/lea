import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/300.css";
import "@fontsource/be-vietnam-pro/200.css";
import "@fontsource/be-vietnam-pro/100.css";
import { Root } from "./features/root";

function start(): void {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Could not find root element");
  }
  const content = <Root />;

  createRoot(container).render(content);
}

start();
