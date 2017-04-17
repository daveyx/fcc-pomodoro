'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Pomodoro from '../components/pomodoro'

class PomodoroContainer extends React.Component {

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
    var intervalId = setInterval(this.runTimer, 1000);
    this.setState({intervalId: intervalId});
  }

  runTimer() {
    // let newCount = this.state.currentCount -1;
    // this.setState({ currentCount: newCount });
    // if (newCount <= 0) {
    //   clearInterval(this.state.intervalId);
    // }
    // console.log(this.state.currentCount);
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

export default connect(mapStatesToProps)(PomodoroContainer);
