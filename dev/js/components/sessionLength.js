'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Pomodoro from './pomodoro'

export default class SessionLength extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={12}>
            Length of session
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="width-33">
              -
            </div>
            <div className="width-33">
              {this.props.sessionLength}
            </div>
            <div className="width-33">
              +
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
