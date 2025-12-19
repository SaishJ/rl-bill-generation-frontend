import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Loader from "./components/Loader.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster richColors position="top-right" />
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
  </StrictMode>
);
