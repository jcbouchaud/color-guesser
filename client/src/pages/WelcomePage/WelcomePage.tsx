import React, { useEffect, useState } from "react";
import api from "../../services/api";
import withAuthentication from "../../hocs/withAuthentication";

interface UserWithScore {
  username: string;
  bestScore: number;
}

const WelcomePage = () => {
  const [results, setResults] = useState<UserWithScore[]>([]);

  const handleFetchUsers = async () => {
    return await api.fetchTopTen();
  };

  useEffect(() => {
    handleFetchUsers().then((res) => setResults(res));
  }, []);

  return (
    <>
      <div>
        {results.map((result) => {
          return (
            <div>
              {result.username}: {result.bestScore}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default withAuthentication(WelcomePage);
