'use strict';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  currentMinute: "25",
  currentSecond: "00",
  isSessionRunning: true,
  isBreakRunning: false
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "DECREMENT_TIMER":
      return decrementTimer(state);
      break;

  }
  return state;
}

function decrementTimer(state) {
  if (Number(state.currentSecond) === 0) {
    return Object.assign({}, state, {
      currentMinute: Number(state.currentMinute) - 1,
      currentSecond: 59
    });
  } else {
    return Object.assign({}, state, {
      currentSecond: Number(state.currentSecond) - 1
    });
  }
}
