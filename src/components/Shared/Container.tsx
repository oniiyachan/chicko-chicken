import React from "react";
import Background from "../../assets/img/intro/background.png";

const Container: React.FC = (props: any) => {
  return (
    <div
      style={{
        background: "url(" + Background + ") no-repeat center center fixed",
        height: "100%",
        padding: "0 20px",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
