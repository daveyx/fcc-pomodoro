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
          <Col xs={2} xsOffset={2}>
            <div>
              -
            </div>
          </Col>
          <Col xs={3}>
            X
          </Col>
          <Col xs={2}>
            <div>
              +
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
