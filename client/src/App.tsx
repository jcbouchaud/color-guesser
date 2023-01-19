import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthPage, {authLoader} from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage/>,
    },
    {
      path: "/auth/",
      element: <AuthPage/>,
      loader: authLoader
    },
    {
      path: "/play/",
      element: <GamePage/>,
    },

]);


function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
