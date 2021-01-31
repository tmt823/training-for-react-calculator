import React from 'react';

export class ResultBtn extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <button onClick={this.props.clickResult} className="button">=</button>
      </div>
    );
  }
}