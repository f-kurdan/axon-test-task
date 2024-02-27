import Table from "./table/table";
import "./App.css";
import ErrorPage from './error-page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
    errorElemnt: <ErrorPage />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
