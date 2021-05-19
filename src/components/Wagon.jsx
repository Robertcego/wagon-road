import React from "react";
import { connect } from "react-redux";
import WagonInteraction from "./WagonInteraction";

function Wagon({ supplies, distance, days, cash }) {
  return (
    <div>
      <h1>Wagon Road</h1>
      <div>
        <h2>Supplies: {supplies}</h2>
        <h2>Distance: {distance}</h2>
        <h2>Days: {days}</h2>
        <h2>Cash: ${cash}</h2>
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
