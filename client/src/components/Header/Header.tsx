import { useGameContext } from "../../context/GameContext/GameContext";
import { useUserContext } from "../../context/UserContext/UserContext";
import Button from "@mui/material/Button";

const Header = () => {
  const { handleResetGame } = useGameContext();
  const { handleResetUser } = useUserContext();

  const logout = () => {
    handleResetGame();
    handleResetUser();
    console.log("ete ")
  };
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Header;
