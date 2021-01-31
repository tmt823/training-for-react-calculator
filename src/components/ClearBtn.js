import React from 'react';

export class ClearBtn extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div>
        <button onClick={this.props.clickClear} className="button">C</button>
      </div>
    );
  }

}