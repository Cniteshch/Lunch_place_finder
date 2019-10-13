
import React from 'react';
import Input from "../shared/input";
import Button from "../shared/button";
const SearchSection = ({
    getValue,
    getRecommend, 
    value,
    inputLabel,
    buttonLabel
}) => {
  return (
    <div className="row">
    <div className="col-md-4">
      <Input
        label={inputLabel}
        getValue={getValue}
        value={value}
      />
    </div>
    <div className="col-md-4">
      <Button onClickFunction={getRecommend} label={buttonLabel} />
    </div>
  </div>
  );
};

 export default SearchSection;
