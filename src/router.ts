import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
const WeatherApp = lazy(() => import("./apps/WeatherApp"));
const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/weatherApp", Component: WeatherApp },
]);
export default router;
