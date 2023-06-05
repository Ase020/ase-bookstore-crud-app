import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import { Add, Book, Edit, Home, Layout } from "./pages";

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
        {
          path: "/book/add?",
          element: <Add />,
        },
        {
          path: "/books/:id/edit?",
          element: <Edit />,
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
