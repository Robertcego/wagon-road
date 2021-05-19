import { GATHER, TRAVEL, TIPPEDWAGON, SELL, THEFT } from "./names";

export function gather() {
  return {
    type: GATHER,
  };
}

export function travel(payload) {
  return {
    type: TRAVEL,
    payload,
  };
}

export function tippedWagon() {
  return {
    type: TIPPEDWAGON,
  };
}

export function sell() {
  return {
    type: SELL,
  };
}

export function theft() {
  return {
    type: THEFT,
  };
}
