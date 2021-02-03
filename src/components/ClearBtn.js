import React from 'react';

export function ClearBtn(props){
  return (
    <div className="clearBtnArea">
      <button onClick={props.clickClear} className="button">C</button>
    </div>
  );

}