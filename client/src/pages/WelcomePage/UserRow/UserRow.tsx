import { UserWithScore } from "../WelcomePage";

const UserRow = ({ username, bestScore }: UserWithScore) => {
  return (
    <div>
      {username}: {bestScore}
    </div>
  );
};

export default UserRow;
