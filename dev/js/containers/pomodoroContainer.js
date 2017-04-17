'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Pomodoro from '../components/pomodoro';
import {
  decrementTimerAction,
  startPomodoroAction,
  pausePomodoroAction,
  resumePomodoroAction
} from '../actions/index';

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
    if ( ! this.props.isPaused && nextProps.isPaused) {
      this.stopTimer();
    } else if ( this.props.isPaused && ! nextProps.isPaused) {
      this.startTimer();
    }
    if (this.props.isSessionRunning !== nextProps.isSessionRunning) {
      if (nextProps.isSessionRunning && ! nextProps.isPaused) {
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
        pauseClickHandler={this.props.pausePomodoro}
        resumeClickHandler={this.props.resumePomodoro}
        isSessionRunning={this.props.isSessionRunning}
        isBreakRunning={this.props.isBreakRunning}
        isPaused={this.props.isPaused} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    minute: state.pomodoroState.currentMinute,
    second: state.pomodoroState.currentSecond,
    isSessionRunning: state.pomodoroState.isSessionRunning,
    isBreakRunning: state.pomodoroState.isBreakRunning,
    isPaused: state.pomodoroState.isPaused,
    userInfo: state.pomodoroState.userInfo
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    decrementTimer: decrementTimerAction,
    startPomodoro: startPomodoroAction,
    pausePomodoro: pausePomodoroAction,
    resumePomodoro: resumePomodoroAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(PomodoroContainer);
