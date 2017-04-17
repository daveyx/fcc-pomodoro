'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import BreakLengthContainer from '../containers/breakLengthContainer';
import SessionLengthContainer from '../containers/sessionLengthContainer';

export default class Pomodoro extends Component {
  constructor(props) {
    super();
    this.state = {
      currentCount: 10
    };
    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    let newCount = this.state.currentCount -1;
    this.setState({ currentCount: newCount });
    if (newCount <= 0) {
      clearInterval(this.state.intervalId);
    }
    //console.log(this.state.currentCount);
  }

  render() {
    return(
      <div className="wrapper text-center">
        <Row>
          <Col xs={6} xsOffset={0}>
            <BreakLengthContainer />
          </Col>
          <Col xs={6} xsOffset={0}>
            <SessionLengthContainer />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <div className="session">
              {this.props.minute} : {this.props.second}<br />
              {this.state.currentCount}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
