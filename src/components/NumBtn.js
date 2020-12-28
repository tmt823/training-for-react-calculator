import React from 'react';
import "../css/NumBtn.css";

export class NumBtn extends React.Component {
  constructor(){
    super();
    this.state = {
      displayNum: 0,
      inputNum : 0,
      operator: "",
    };
  }

  render(){
    return(
      <div>
        <p>{this.state.displayNum}</p>
        <p>{this.state.inputNum}</p>
        <button onClick={this.input} value={1} className="NumBtn">1</button>
        <button onClick={this.input} value={2} className="NumBtn">2</button>
        <button onClick={this.input} value={3} className="NumBtn">3</button>
        <button onClick={this.input} value={4} className="NumBtn">4</button>
        <button onClick={this.input} value={5} className="NumBtn">5</button>
        <button onClick={this.input} value={6} className="NumBtn">6</button>
        <button onClick={this.input} value={7} className="NumBtn">7</button>
        <button onClick={this.input} value={8} className="NumBtn">8</button>
        <button onClick={this.input} value={9} className="NumBtn">9</button>
        <button onClick={this.onOperator} value={"+"}>+</button>
        <button onClick={this.calculate}>=</button>
      </div>
    )
  }

  input = (event) => {
    this.setState({inputNum: Number(event.target.value)});
  }

  onOperator = (event) => {
    this.setState({
      operator: event.target.value
    });
  }
  calculate = () => {
    if(this.state.operator === "+"){
      this.setState({
        displayNum: this.state.displayNum + this.state.inputNum
      });
    }
  }
}
