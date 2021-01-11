import React from 'react';

export class ResultBtn extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <button onClick={this.calculate} className="button">=</button>
      </div>
    );
  }
  calculate = event => {
    event.preventDefault();
    this.props.clickResult();
  }
}