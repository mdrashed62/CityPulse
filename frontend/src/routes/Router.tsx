import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Registration } from "../auth/registration/Ragistration";
import { Login } from "../auth/login/Login";
import Home from "../home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login", 
        element: <Login />
      }
    ],
  },
]);

export default router;
