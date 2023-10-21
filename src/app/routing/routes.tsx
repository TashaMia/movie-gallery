import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Films from "../../pages/films/ui/Films";
import Film from "../../pages/film/ui/Film";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/films?",
        element: <Films />,
      },
      {
        path: "/:id",
        element: <Film />,
      },
    ],
  },
]);
