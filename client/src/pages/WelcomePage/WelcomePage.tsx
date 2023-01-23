import React, { useEffect, useState } from "react";
import api from "../../services/api";
import withAuthentication from "../../hocs/withAuthentication";
import UserRow from "./UserRow/UserRow";
import Header from "../../components/Header/Header";

export interface UserWithScore {
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
    <div>
      <Header/>
      {results.map((result) => {
        return <UserRow {...result} />
      })}
    </div>
  );
};

export default withAuthentication(WelcomePage);
