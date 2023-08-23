import React from "react";

const Image = ({ id }) => {
  return (
    <>
      {id && (
        <figure className="figure">
          <img src={id} alt="Imagen desde API" />
        </figure>
      )}
    </>
  );
};

export default Image;
