'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import BreakLengthContainer from '../containers/breakLengthContainer';
import SessionLengthContainer from '../containers/sessionLengthContainer';

export default class Pomodoro extends Component {
  constructor(props) {
    super();
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
              {this.props.userInfo}<br />
              {this.props.minute} : {this.props.second}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
