import React from "react";

const Button = ({ data }) => {
  const { link, value, url } = data;
  return (
    <a href={link || url} className="button">
      {value}
    </a>
  );
};

export default Button;
