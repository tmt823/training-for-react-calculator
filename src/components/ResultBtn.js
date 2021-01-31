import React from 'react';

export function ResultBtn (props) {
  return(
    <div>
      <button onClick={props.clickResult} className="button">=</button>
    </div>
  );
}