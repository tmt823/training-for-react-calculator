import React from 'react';

export function ResultBtn () {
  return(
    <div>
      <button onClick={this.props.clickResult} className="button">=</button>
    </div>
  );
}