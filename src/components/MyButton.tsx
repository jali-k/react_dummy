import React, { useState } from "react";

interface Props {
  children: String;
  color: "primary" | "secondary" | "danger";
  onClickHandler: () => void;
}

const MyButton = ({ children, color, onClickHandler }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickHandler}>
      {children}{" "}
    </button>
  );
};

export default MyButton;
