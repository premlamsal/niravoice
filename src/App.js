import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Invoices  from "./pages/Invoices";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchases from "./pages/Purchases";
import Categories from "./pages/Categories";
import Units from "./pages/Units";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Dashboard/>,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "products/",
        element: <Products/>,
      },
      {
        path: "invoices/",
        element: <Invoices/>,
      },
      {
        path: "purchases/",
        element: <Purchases/>,
      },
      
      {
        path: "customers/",
        element: <div>customers</div>,
      },
      {
        path: "suppliers/",
        element: <div>suppliers</div>,
      },
      {
        path: "categories/",
        element: <Categories/>,
      },
      {
        path: "units/",
        element: <Units/>,
      },
      {
        path: "settings/",
        element: <div>settings</div>,
      },
      
    ],

  },

  {
    path:"/login",
    element:<Login/>,
    errorElement: <ErrorPage />,
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
