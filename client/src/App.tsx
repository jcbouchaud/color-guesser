import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import WelcomePage from "./pages/RankingPage/RankingPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import GameProvider from "./context/GameContext/GameContext";
import UserProvider from "./context/UserContext/UserContext";

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
    element: <GamePage />,
  },
]);

const StyledApp = styled.div`
  min-height: 80vh;
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <UserProvider>
        <GameProvider>
          <RouterProvider router={router} />
        </GameProvider>
      </UserProvider>
    </StyledApp>
  );
}

export default App;
