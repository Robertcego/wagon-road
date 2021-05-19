import React from "react";
import { connect } from "react-redux";
import WagonInteraction from "./WagonInteraction";

function Wagon(props) {
  return (
    <div>
      <h1>Wagon Road</h1>
      <div>
        <h2>Supplies: {props.supplies}</h2>
        <h2>Distance: {props.distance}</h2>
        <h2>Days: {props.days}</h2>
        <h2>Cash: ${props.cash}</h2>
        <WagonInteraction />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    supplies: state.supplies,
    distance: state.distance,
    days: state.days,
    cash: state.cash,
  };
}

export default connect(mapStateToProps)(Wagon);
