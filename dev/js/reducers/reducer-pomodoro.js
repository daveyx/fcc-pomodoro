'use strict';

const initialState = {
  sessionLength: 1,
  breakLength: 1,
  currentMinute: "1",
  currentSecond: "00",
  isSessionRunning: true,
  isBreakRunning: false,
  userInfo: ""
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
  if (Number(state.currentSecond) === 0 && Number(state.currentMinute) === 0) {
    if (state.isSessionRunning) {
      return Object.assign({}, state, {
        currentMinute: state.breakLength - 1,
        currentSecond: 59,
        isSessionRunning: false,
        isBreakRunning: true
      });
    }
    if (state.isBreakRunning) {
      return Object.assign({}, state, {
        currentMinute: state.sessionLength - 1,
        currentSecond: 59,
        isSessionRunning: false,
        isBreakRunning: true
      });
    }
  }
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
