import React from 'react';

export class NumBtn extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="numberArea">
        <button onClick={this.clickNum} value={1} className="button">1</button>
        <button onClick={this.clickNum} value={2} className="button">2</button>
        <button onClick={this.clickNum} value={3} className="button">3</button>
        <button onClick={this.clickNum} value={4} className="button">4</button>
        <button onClick={this.clickNum} value={5} className="button">5</button>
        <button onClick={this.clickNum} value={6} className="button">6</button>
        <button onClick={this.clickNum} value={7} className="button">7</button>
        <button onClick={this.clickNum} value={8} className="button">8</button>
        <button onClick={this.clickNum} value={9} className="button">9</button>
        <button onClick={this.clickNum} value={0} className="button">0</button>
      </div>
    )
  }

  clickNum = event => {
    event.preventDefault();
    this.props.clickNum(event.target.value);
  }
}
