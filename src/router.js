import { createBrowserRouter } from "react-router-dom";

import Main from "./routes/Main";
import UserProfile from "./routes/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/user",
    element: <UserProfile />,
  },
]);
