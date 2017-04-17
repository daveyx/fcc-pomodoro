'use strict';

import React from 'react';
import {connect} from 'react-redux';
import BreakLength from '../components/breakLength'

class BreakLengthContainer extends React.Component {
  render() {
    return(
      <BreakLength breakLength={this.props.breakLength} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    breakLength: state.pomodoroState.breakLength
  }
}

export default connect(mapStatesToProps)(BreakLengthContainer);
