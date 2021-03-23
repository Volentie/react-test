import React from "react";

const Titulo = ({ children, color = "#4c8b64", ...rest }) => {
  return (
    <h2 style={{ color: color }} {...rest}>
      {children}
    </h2>
  );
};

export default Titulo;
