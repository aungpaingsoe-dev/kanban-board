import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import router from "@/routes";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
