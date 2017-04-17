'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Pomodoro from '../components/pomodoro';
import {decrementTimerAction, startPomodoroAction} from '../actions/index';

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

  componentWillUpdate(nextProps, nextState) {
    if (this.props.isSessionRunning !== nextProps.isSessionRunning) {
      if (nextProps.isSessionRunning ) {
        this.startTimer();
      }
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }

  startTimer() {
    var intervalId = setInterval(this.runTimer, 300);
    this.setState({intervalId: intervalId});
  }

  runTimer() {
    this.props.decrementTimer();
  }

  render() {
    return(
      <Pomodoro
        minute={this.props.minute}
        second={this.props.second}
        userInfo={this.props.userInfo}
        startClickHandler={this.props.startPomodoro}
        isSessionRunning={this.props.isSessionRunning}
        isBreakRunning={this.props.isBreakRunning} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    minute: state.pomodoroState.currentMinute,
    second: state.pomodoroState.currentSecond,
    isSessionRunning: state.pomodoroState.isSessionRunning,
    isBreakRunning: state.pomodoroState.isBreakRunning,
    userInfo: state.pomodoroState.userInfo
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    decrementTimer: decrementTimerAction,
    startPomodoro: startPomodoroAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(PomodoroContainer);
