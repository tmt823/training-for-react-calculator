import React from 'react';

export function ClearBtn(){
  return (
    <div>
      <button onClick={this.props.clickClear} className="button">C</button>
    </div>
  );

}