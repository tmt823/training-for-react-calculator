import React from 'react';

export function NumBtn(props) {

  return(
    <div className="numberArea">
      <button onClick={props.clickNum} value={1} className="button">1</button>
      <button onClick={props.clickNum} value={2} className="button">2</button>
      <button onClick={props.clickNum} value={3} className="button">3</button>
      <button onClick={props.clickNum} value={4} className="button">4</button>
      <button onClick={props.clickNum} value={5} className="button">5</button>
      <button onClick={props.clickNum} value={6} className="button">6</button>
      <button onClick={props.clickNum} value={7} className="button">7</button>
      <button onClick={props.clickNum} value={8} className="button">8</button>
      <button onClick={props.clickNum} value={9} className="button">9</button>
      <button onClick={props.clickNum} value={0} className="button">0</button>
    </div>
  );
}
