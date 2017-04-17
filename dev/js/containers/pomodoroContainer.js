'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Pomodoro from '../components/pomodoro'

class PomodoroContainer extends React.Component {
  render() {
    return(
      <Pomodoro minute={this.props.minute} second={this.props.second} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    minute: state.pomodoroState.currentMinute,
    second: state.pomodoroState.currentSecond
  }
}

export default connect(mapStatesToProps)(PomodoroContainer);
