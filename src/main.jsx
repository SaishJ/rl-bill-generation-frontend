import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Loader from "./components/Loader.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
