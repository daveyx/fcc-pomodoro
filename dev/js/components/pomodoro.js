'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import BreakLengthContainer from '../containers/breakLengthContainer';
import SessionLengthContainer from '../containers/sessionLengthContainer';

export default class Pomodoro extends Component {
  constructor(props) {
    super();
  }

  getButton1Text() {
    if ( ! this.props.isSessionRunning && ! this.props.isBreakRunning) {
      return "Start";
    } else {
      return "Pause";
    }
  }

  getButton2Text() {
    if ( this.props.isSessionRunning || this.props.isBreakRunning) {
      return "Reset";
    }
  }

  render() {
    let button2Text = this.getButton2Text();
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
              <p className="user-info">
                {this.props.userInfo}<br />
              </p>
              <p className="timer">
                {this.props.minute}:{this.props.second}
              </p>
            </div>
            <div className="buttons">
              <div className="button" onClick={this.props.startClickHandler}>{this.getButton1Text()}</div>
              {button2Text ?
                <div className="button" onClick={this.props.startClickHandler}>{button2Text}</div>
                : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
