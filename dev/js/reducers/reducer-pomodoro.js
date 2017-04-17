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
  return state;
}
