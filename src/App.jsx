import { createBrowserRouter, RouterProvider } from "react-router";
import routeManagement from "./routes/routeManagement";

function App() {
  const router = createBrowserRouter(routeManagement);

  return <RouterProvider router={router} />;
}

export default App;
