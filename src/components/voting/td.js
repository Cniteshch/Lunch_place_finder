
import React from 'react';
import Tickmark from '../shared/rightTick'
const SingleItem = ({
  backGround,
  rightTickStyle
}) => {
  return (
    <td className={backGround}>
        <Tickmark rightTickStyle={rightTickStyle}  />
    </td>
  );
};



export default SingleItem;
