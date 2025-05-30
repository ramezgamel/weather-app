import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import Layout from "./components/Layout";
const WeatherApp = lazy(() => import("./apps/weatherApp/WeatherApp"));
const QuoteApp = lazy(() => import("./apps/QuoteApp/QuoteApp"));
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      {
        path: "/weatherApp",
        Component: WeatherApp,
      },
      {
        path: "/quoteApp",
        Component: QuoteApp,
      },
    ],
  },
]);
export default router;
