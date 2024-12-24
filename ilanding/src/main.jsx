import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ILanding } from "./iLanding/ILanding";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ILanding />
  </StrictMode>
);
