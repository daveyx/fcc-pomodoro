'use strict';

import React, {Component} from 'react';

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
    console.log("intervalId ", intervalId);
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
    console.log(this.state.currentCount);
  }

  render() {
    return(
      <div className="wrapper">
        {this.state.currentCount}
      </div>
    );
  }
}
