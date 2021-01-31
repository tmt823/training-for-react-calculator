import React from 'react';

export class OperatorBtn extends React.Component {
  render() {
    return(
      <div className="operatorArea">
        <button onClick={this.clickOperator} value={"+"} className="button">+</button>
        <button onClick={this.clickOperator} value={"-"} className="button">-</button>
        <button onClick={this.clickOperator} value={"*"} className="button">x</button>
        <button onClick={this.clickOperator} value={"/"} className="button">/</button>
      </div>
    );
  }
  clickOperator = event => {
    event.preventDefault();
    this.props.clickOperator(event.target.value);
  }
}