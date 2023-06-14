import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import React, { useState } from "react";

interface Props {
  onClickHandler: () => void;
}

const Like = ({ onClickHandler }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClickHandler();
  };

  if (status) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "10px",
          paddingRight: "10px",
          marginLeft: "auto",
        }}
      >
        <AiFillHeart onClick={toggle} color="red" size="40" />
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "10px",
        paddingRight: "10px",
        marginLeft: "auto",
      }}
    >
      <AiOutlineHeart onClick={toggle} size="40" />
    </div>
  );
};

export default Like;
