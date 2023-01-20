import React from "react";
import Option from "../Option/Option";

const OptionsList = () => {
  const options = [{ color: "#111111" }, { color: "#000000" }];
  return (
    <>
      <div>
        {options.map((o, index) => (
          <Option key={index} {...o} />
        ))}
      </div>
    </>
  );
};

export default OptionsList;
