import React, { Component } from "react";
class Timer extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() -this.state.timerStart
      });
    }, 10);
  };
  
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };
  
  render() {
    const { timerTime } = this.state;
let c = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
let s = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
let m = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
let h = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="mainTimer">
        
      
          <div>
           {h} : {m} : {s} : {c}
           </div>

           {!(this.state.timerOn ) && this.state.timerTime === 0 && (
           <button  class="bouton" onClick={this.startTimer}>Start</button>
          )}
          {(this.state.timerOn)&& (
          <button class="bouton" onClick={this.stopTimer}>Stop</button>
          )}
          {!(this.state.timerOn) && this.state.timerTime > 0 && (
          <button class="bouton" onClick={this.startTimer}>Resume</button>
          )}
          {!(this.state.timerOn ) && this.state.timerTime > 0 && (
          <button class="bouton" onClick={this.resetTimer}>Reset</button>
          )}
          
      </div>
    );
  }
}export default Timer;