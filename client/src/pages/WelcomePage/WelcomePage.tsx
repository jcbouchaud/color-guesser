import React, { useEffect, useState } from "react";
import api from "../../services/api";
import withAuthentication from "../../hocs/withAuthentication";

const WelcomePage = () => {
  const [results, setResults] = useState<Array<any>>([]);
  // const getResults = () => {
  //   api.fetchResults().then((res) => setResults(res.data));
  // };

  // useEffect(() => {
  //   getResults();
  // }, []);

  return (
    <>
      <div>Welcome Page</div>
      <div>
        {results.map((result) => {
          return (
            <div>
              {result.name}: {result.score}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default withAuthentication(WelcomePage);
