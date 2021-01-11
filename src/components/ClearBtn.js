import React from 'react';

export class ClearBtn extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div>
        <button onClick={this.clear} className="button">C</button>
      </div>
    );
  }
  clear = () => {
    this.props.clickClear();
  }
}