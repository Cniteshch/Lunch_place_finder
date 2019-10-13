import React from "react";

const MapElement = ({ array, property }) => {
  return (
    <div>
      {array.map((item, index) => (
        <span key={index}>{item[property]} </span>
      ))}
    </div>
  );
};

export default MapElement;
