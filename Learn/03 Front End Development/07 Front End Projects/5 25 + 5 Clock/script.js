let intervalID
class Controls extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div >
        <div id="break-label">Break Length</div>
        <div class="length row">
          <div class="col-3"></div>
          <button class="time col-2" id="break-decrement" onClick={this.decrementBreak}>-</button>
          <div class="col-2"></div>
          <button class="time col-2" id="break-increment" onClick={this.props.incrementBreak}>+</button>
          <div class="col-3"></div>
        </div>
      </div>
    )
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25*60,
      timerState: 'stopped',
      timerType: 'Session',
      intervalID: '',
    }

    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.resetClock = this.resetClock.bind(this);
    this.runClock = this.runClock.bind(this);
  }

  incrementBreak = () => {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  decrementBreak = () => {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  incrementSession = () => {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeft: this.state.sessionLength*60 + 1,
      })
    }
  }

  decrementSession = () => {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      })
    }
  }

  resetClock = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25 * 60,
      timerState: 'stopped',
      timerType: 'Session',
      intervalID: '',
    })

  }

  runClock = () => {
    if (this.state.timerState === 'stopped') {
      intervalID = setInterval(() => {
        this.setState({
          timeLeft: this.state.timeLeft - 1,
          timerState: 'running',
        })
      }, 1000);
    } else if (this.state.timerState === 'running') {
      clearInterval(intervalID);
      this.setState({
        timerState: 'stopped',
      })
    }
  }


  timeDisplay = () => {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - 60 * minutes;
    return seconds = seconds < 10 ? "0" + seconds : seconds, minutes = minutes < 10 ? "0" + minutes : minutes,
    minutes + ":" + seconds
  }

  render() {
    return (
      <div id="clock" class="container text-center">
          <h1 class="col-12">25 + 5 Clock</h1>
        <Controls />
        <div class="col-12" id="break-length">{this.state.breakLength}</div>

        <div id="session-label">Session Length</div>
        <div class="length row">
          <div class="col-3"></div>
          <button class="time col-2" id="session-decrement" onClick={this.decrementSession}>-</button>
          <div class="col-2" id="session-length">{this.state.sessionLength}</div>
          <button class="time col-2" id="session-increment" onClick={this.incrementSession}>+</button>
          <div class="col-3"></div>
        </div>
        <div id="timer-label">Session</div>
        <div id="time-left">{this.timeDisplay()}</div>
        <div class="row">
          <div class="col-2"></div>
          <button class="time col-3" id="start_stop" onClick={this.runClock}>Start/Stop</button>
          <div class="col-2"></div>
          <button class="time col-3" id="reset" onClick={this.resetClock}>Reset</button>
          <div class="col-2"></div>
        </div>

        <audio id="beep" src="https://www.soundjay.com/buttons/sounds/beep-02.mp3"></audio>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

