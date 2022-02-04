import React from "react";

type Props = {
  label: string;
  text: string;
};

function Button({ label, text }: Props) {
  return (
    <>
      <label htmlFor={label}></label>
      <button>{text}</button>
    </>
  );
}

export default Button;
