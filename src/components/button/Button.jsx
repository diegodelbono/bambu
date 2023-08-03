import React from "react";

const Button = ({ data }) => {
    const { link, value } = data;

    return (
        <a href={link} className="button">{value}</a>
    )
};

export default Button;
