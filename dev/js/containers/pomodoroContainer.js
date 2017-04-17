'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Pomodoro from '../components/pomodoro';
import {decrementTimerAction} from '../actions/index';

class PomodoroContainer extends React.Component {
  constructor(props) {
    super();
    this.runTimer = this.runTimer.bind(this)
  }

  componentDidMount() {
    if (this.props.isSessionRunning) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidUpdate(nextProps) {

  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }

  startTimer() {
    var intervalId = setInterval(this.runTimer, 100);
    this.setState({intervalId: intervalId});
  }

  runTimer() {
    this.props.decrementTimer();
  }

  render() {
    return(
      <Pomodoro minute={this.props.minute} second={this.props.second} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    minute: state.pomodoroState.currentMinute,
    second: state.pomodoroState.currentSecond,
    isSessionRunning: state.pomodoroState.isSessionRunning,
    isBreakRunning: state.pomodoroState.isBreakRunning
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    decrementTimer: decrementTimerAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(PomodoroContainer);
