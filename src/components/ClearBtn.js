import React from 'react';

export function ClearBtn(props){
  return (
    <div>
      <button onClick={props.clickClear} className="button">C</button>
    </div>
  );

}