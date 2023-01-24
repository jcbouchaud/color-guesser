import React, { useEffect, useState } from "react";
import api from "../../services/api";
import withAuthentication from "../../hocs/withAuthentication";
import UserRow from "./UserRow/UserRow";
import Page from "../../components/Page/Page";
import styled from "styled-components";

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
`;

const StyledTopText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  font-family: "Roboto Light" !important;
  text-align: center;
  margin-bottom: 20px;
`;

export interface UserWithScore {
  username: string;
  bestScore: number;
}

const RankingPage = () => {
  const [results, setResults] = useState<UserWithScore[]>([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const handleFetchUsers = async () => {
      setLoader(true)
      return await api.fetchTopTen();
    };

    handleFetchUsers().then((res) => {
      setResults(res);
      setLoader(false)
    });

  }, []);

  return (
    <Page loading={loader}>
      <StyledUsersList>
        <StyledTopText>TOP 10</StyledTopText>
        {results.map((result, index) => {
          return <UserRow key={index} {...result} />;
        })}
      </StyledUsersList>
    </Page>
  );
};

export default withAuthentication(RankingPage);
