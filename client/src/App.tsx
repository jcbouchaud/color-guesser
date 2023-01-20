import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import GameProvider from "./context/GameContext/GameContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/auth/",
    element: <AuthPage />,
  },
  {
    path: "/play/",
    element: (
      <GameProvider>
        <GamePage />
      </GameProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
