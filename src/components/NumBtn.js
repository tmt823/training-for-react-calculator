import React from 'react';
import "../css/NumBtn.css";

export class NumBtn extends React.Component {
  constructor(){
    super();
    this.state = {
      displayNum: "",
      inputNum : "",
      operator: "",
    };
  }

  render(){
    return(
      <div className="content">
        <p className="text">displayNum : {this.state.displayNum}</p>
        <p className="text">inputNum : {this.state.inputNum}</p>
        <button onClick={this.input} value={0} className="NumBtn">0</button>
        <button onClick={this.input} value={1} className="NumBtn">1</button>
        <button onClick={this.input} value={2} className="NumBtn">2</button>
        <button onClick={this.input} value={3} className="NumBtn">3</button>
        <button onClick={this.input} value={4} className="NumBtn">4</button>
        <button onClick={this.input} value={5} className="NumBtn">5</button>
        <button onClick={this.input} value={6} className="NumBtn">6</button>
        <button onClick={this.input} value={7} className="NumBtn">7</button>
        <button onClick={this.input} value={8} className="NumBtn">8</button>
        <button onClick={this.input} value={9} className="NumBtn">9</button>
        <button onClick={this.onOperator} value={"+"} className="NumBtn">+</button>
        <button onClick={this.onOperator} value={"-"} className="NumBtn">-</button>
        <button onClick={this.onOperator} value={"*"} className="NumBtn">x</button>
        <button onClick={this.onOperator} value={"/"} className="NumBtn">/</button>
        <button onClick={this.calculate} className="NumBtn">=</button>
      </div>
    )
  }

  input = (event) => {
    if(this.state.operator === "") {
      this.setState({displayNum: this.state.displayNum + event.target.value});
    } else {
      this.setState({inputNum: this.state.inputNum + event.target.value});
    }
  }

  onOperator = (event) => {
    this.setState({
      operator: event.target.value
    });
  }
  calculate = () => {
    switch(this.state.operator){
      case '+':
        this.setState({
          displayNum: Number(this.state.displayNum) + Number(this.state.inputNum)
        });
        break;
      case '-':
        this.setState({
          displayNum: Number(this.state.displayNum) - Number(this.state.inputNum)
        });
        break;
      case '*':
        this.setState({
          displayNum: Number(this.state.displayNum) * Number(this.state.inputNum)
        });
        break;
      case '/':
        this.setState({
          displayNum: Number(this.state.displayNum) / Number(this.state.inputNum)
        });
        break;
      default:
    }
    this.setState({inputNum: ""});
  }
}
