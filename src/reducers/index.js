import { GATHER, TRAVEL, TIPPEDWAGON, SELL, THEFT } from "../actions/names";

const initialState = {
  supplies: 200,
  distance: 0,
  days: 0,
  cash: 200,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GATHER: {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case TRAVEL: {
      return {
        ...state,
        supplies: state.supplies
          ? state.supplies - 20 * action.payload
          : (state.supplies = 0),
        distance: state.distance + 10 * action.payload,
        days: Number(state.days) + Number(action.payload),
      };
    }
    case TIPPEDWAGON: {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    case SELL: {
      return {
        ...state,
        supplies: state.supplies ? state.supplies - 20 : 0,
        cash: !state.supplies ? state.cash : state.cash + 5,
      };
    }
    case THEFT: {
      return {
        ...state,
        cash: state.cash ? Math.floor(state.cash / 2) : 0,
      };
    }

    default:
      return state;
  }
}
