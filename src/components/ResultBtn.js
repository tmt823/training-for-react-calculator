import React from 'react';

export function ResultBtn (props) {
  return(
    <div className="resultBtnArea">
      <button onClick={props.clickResult} className="button">=</button>
    </div>
  );
}