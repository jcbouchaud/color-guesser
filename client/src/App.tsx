import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/Main";
import AuthPage, {authLoader} from "./pages/Auth/Auth";


const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage/>,
      loader: authLoader
    },
    {
      path: "/play/",
      element: <MainPage/>,
    },
]);


function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
