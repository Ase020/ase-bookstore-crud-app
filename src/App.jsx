import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import { Book, Home, Layout } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books/:id",
          element: <Book />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
