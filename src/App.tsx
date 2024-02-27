import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./App.css";
import Table from "./table/table";
import ErrorPage from './error-page';
import Edit from "./edit/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />
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
