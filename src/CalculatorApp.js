import React from 'react';
import { NumBtn } from "./components/NumBtn";
import { OperatorBtn } from "./components/OperatorBtn";
import { ResultBtn } from "./components/ResultBtn";
import { ClearBtn } from "./components/ClearBtn";

import "./css/index.css";

export class CalculatorApp extends React.Component {
  constructor(){
    super();
    this.state = {
      displayNum: "",
      inputNum: "",
      prevNum: "",
      operator: "",
    };
  }
  render() {
    return (
      <div className="content">
        <h2 className="title">Calculator</h2>
        <div className="content__inner">
          <p className="text">displayNum : {this.state.displayNum}</p>
          <NumBtn clickNum={this.clickNum} />
          <OperatorBtn clickOperator={this.clickOperator} />
          <ResultBtn clickResult={this.clickResult} />
          <ClearBtn clickClear={this.clickClear} />
        </div>
      </div>
    );
  }

  clickNum = event => {
    const number = event.target.value
    if(this.state.operator === "") {
      // 初回の数字入力
      this.setState({displayNum: this.state.displayNum + number});
    } else {
      if(this.state.prevNum === "") {
        this.setState({prevNum: this.state.displayNum});
      }
      this.setState({
        inputNum: this.state.inputNum + number,
        displayNum: this.state.inputNum + number
      });
    }
  }

  clickOperator = event => {
    this.setState({
      operator: event.target.value
    });
    if(this.state.inputNum !== "" && this.state.prevNum !== "") {
      this.clickResult();
    }
  }
  clickResult = () => {
    switch(this.state.operator){
      case '+':
        this.setState({
          displayNum: Number(this.state.prevNum) + Number(this.state.inputNum)
        });
        break;
      case '-':
        this.setState({
          displayNum: Number(this.state.prevNum) - Number(this.state.inputNum)
        });
        break;
      case '*':
        this.setState({
          displayNum: Number(this.state.prevNum) * Number(this.state.inputNum)
        });
        break;
      case '/':
        this.setState({
          displayNum: Number(this.state.prevNum) / Number(this.state.inputNum)
        });
        break;
      default:
    }
    this.setState({
      inputNum: "",
      prevNum: ""
    });
  }

  clickClear = () => {
    this.setState({
      displayNum: "",
      inputNum: "",
      operator: "",
    })
  }
}
