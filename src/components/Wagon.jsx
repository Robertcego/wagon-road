import React from "react";
import { connect } from "react-redux";
import WagonInteraction from "./WagonInteraction";

//? Material ui Components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//!
function Wagon({ supplies, distance, days, cash }) {
  return (
    <Box>
      <Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Wagon Road</h1>
          <h2>Supplies: {supplies}</h2>
          <h2>Distance: {distance}</h2>
          <h2>Days: {days}</h2>
          <h2>Cash: ${cash}</h2>
          <WagonInteraction />
        </Grid>
      </Grid>
    </Box>
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
