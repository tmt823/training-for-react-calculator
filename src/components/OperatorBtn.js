import React from 'react';

export function OperatorBtn(props) {
  return(
    <div className="operatorArea">
      <button onClick={props.clickOperator} value={"+"} className="button">+</button>
      <button onClick={props.clickOperator} value={"-"} className="button">-</button>
      <button onClick={props.clickOperator} value={"*"} className="button">x</button>
      <button onClick={props.clickOperator} value={"/"} className="button">/</button>
    </div>
  );
}