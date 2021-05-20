import React, { useState } from "react";
import { connect } from "react-redux";
import { GATHER, TRAVEL, TIPPEDWAGON, SELL, THEFT } from "../actions/names";

//? Material-ui components
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
//? Icons
import CardTravelIcon from "@material-ui/icons/CardTravel";
import AddIcon from "@material-ui/icons/Add";
import CachedIcon from "@material-ui/icons/Cached";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CloseIcon from "@material-ui/icons/Close";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

//!

function WagonInteraction(props) {
  const [day, setDay] = useState(0);

  const onChange = (e) => setDay(e.target.value);
  //!
  return (
    <div>
      <Container>
        <TextField
          maxWidth="md"
          type="text"
          name="travel"
          placeholder="Travel Days"
          onChange={onChange}
          autoComplete="false"
        />
        <Button
          startIcon={<CardTravelIcon color="secondary" />}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => props.dispatch({ type: TRAVEL, payload: day })}
        >
          Travel
        </Button>
      </Container>
      <br />
      <Grid>
        <ButtonGroup variant="contained" color="secondary" size="small">
          <Button
            startIcon={<AddIcon color="primary" size="small" />}
            onClick={() => props.dispatch({ type: GATHER })}
          >
            Gather
          </Button>
          <Button
            startIcon={<CachedIcon color="primary" size="small" />}
            onClick={() => props.dispatch({ type: TIPPEDWAGON })}
          >
            Tipped Wagon
          </Button>
          <Button
            startIcon={<AttachMoneyIcon color="primary" size="small" />}
            onClick={() => props.dispatch({ type: SELL })}
          >
            Sell
          </Button>
          <Button
            startIcon={<CloseIcon color="primary" size="small" />}
            onClick={() => props.dispatch({ type: THEFT })}
          >
            Theft
          </Button>
        </ButtonGroup>
      </Grid>
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
