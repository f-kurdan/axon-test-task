import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Table from "./pages/main/table";
import ErrorPage from './error-page';
import Create from "./pages/create/create";
import Edit from "./pages/edit/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />
  },
  {
    path: "/create",
    element: <Create />
  },
  {
    path: "/edit",
    element: <Edit />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
