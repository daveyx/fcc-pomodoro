'use strict';

import React from 'react';
import {connect} from 'react-redux';
import SessionLength from '../components/sessionLength'

class SessionLengthContainer extends React.Component {
  render() {
    return(
      <SessionLength sessionLength={this.props.sessionLength} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    sessionLength: state.pomodoroState.sessionLength
  }
}

export default connect(mapStatesToProps)(SessionLengthContainer);
