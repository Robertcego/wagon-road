import React, { useState } from "react";
import { connect } from "react-redux";
import { GATHER, TRAVEL, TIPPEDWAGON, SELL, THEFT } from "../actions/names";

function WagonInteraction(props) {
  const [day, setDay] = useState(0);

  const onChange = (e) => setDay(e.target.value);
  //!
  return (
    <div>
      <button onClick={() => props.dispatch({ type: GATHER })}>Gather</button>
      <input
        type="text"
        name="travel"
        placeholder="Travel Days"
        onChange={onChange}
      />
      <button onClick={() => props.dispatch({ type: TRAVEL, payload: day })}>
        Travel
      </button>
      <button onClick={() => props.dispatch({ type: TIPPEDWAGON })}>
        Tipped Wagon
      </button>
      <button onClick={() => props.dispatch({ type: SELL })}>Sell</button>
      <button onClick={() => props.dispatch({ type: THEFT })}>Theft</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     supplies: state.supplies,
//     distance: state.distance,
//     days: state.days,
//     cash: state.cash,
//   };
// }

export default connect(null, null)(WagonInteraction);
