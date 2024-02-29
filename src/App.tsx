import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./App.css";
import Table from "./components/table/table";
import ErrorPage from './error-page';
import Create from "./components/create/create";
import Edit from "./components/edit/edit";

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
