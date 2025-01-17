let countdownID

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 300,
      sessionLength: 1500,
      timerState: 'stopped',
      timerType: 'Session',
      timeLeft: 1500,
      intervalID: '',
    }

    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.resetClock = this.resetClock.bind(this);
    this.runClock = this.runClock.bind(this);
  }

  incrementBreak = () => { 
    if (this.state.breakLength < 3600) {
      this.setState({
        breakLength: this.state.breakLength + 60
      })
    }
  }

  decrementBreak = () => { 
    if (this.state.breakLength > 60) {
      this.setState({
        breakLength: this.state.breakLength - 60
      })
    }
  }

  incrementSession = () => {
    if (this.state.sessionLength < 3600) {
      this.setState({
        sessionLength: this.state.sessionLength + 60,
        timeLeft: this.state.timeLeft + 60,
      })
    }
  }

  decrementSession = () => {
    if (this.state.sessionLength > 60) {
      this.setState({
        sessionLength: this.state.sessionLength - 60,
        timeLeft: this.state.timeLeft - 60,
      })
    }
  }

  resetClock = () => {
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0
    clearInterval(countdownID);
    this.setState({
      breakLength: 300,
      sessionLength: 1500,
      timerState: 'stopped',
      timerType: 'Session',
      timeLeft: 1500,
      intervalID: '',
    })

  }

  runClock = () => {
    if (this.state.timerState === 'stopped') {
      countdownID = setInterval(() => {
        this.countdownType();
        this.setState({
          timeLeft: this.state.timeLeft - 1,
          timerState: 'running',
        })
      }, 1000);
    } else if (this.state.timerState === 'running') {
      clearInterval(countdownID);
      this.setState({
        timerState: 'stopped',
      })
    }
    
  }

  countdownType = () => {
    if(this.state.timeLeft === 0){
      document.getElementById('beep').play();
      clearInterval(countdownID);
      if(this.state.timerType === 'Session'){
        this.setState({
          timerState: 'stopped',
          timerType: 'Break',
          timeLeft: this.state.breakLength + 1,
        })
      } else {
        this.setState({
          timerState: 'stopped',
          timerType: 'Session',
          timeLeft: this.state.sessionLength + 1,
        })
      }
      this.runClock();
    }
  }

  timeDisplay = () => {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes*60;
    return seconds = seconds < 10 ? "0" + seconds : seconds, minutes = minutes < 10 ? "0" + minutes : minutes,
    minutes + ":" + seconds
  }

  render() {
    return (
      <div id="clock" class="container text-center">
          <h1 class="col-12">25 + 5 Clock</h1>
          <div id="break-label">Break Length</div>
        <div class="length row">
          <div class="col-3"></div>
          <button class="time col-2" id="break-decrement" onClick={this.decrementBreak}>-</button>
          <div id="break-length" class="col-2">{this.state.breakLength/60}</div>
          <button class="time col-2" id="break-increment" onClick={this.incrementBreak}>+</button>
          <div class="col-3"></div>
        </div>


        <div id="session-label">Session Length</div>
        <div class="length row">
          <div class="col-3"></div>
          <button class="time col-2" id="session-decrement" onClick={this.decrementSession}>-</button>
          <div class="col-2" id="session-length">{Math.floor(this.state.sessionLength/60)}</div>
          <button class="time col-2" id="session-increment" onClick={this.incrementSession}>+</button>
          <div class="col-3"></div>
        </div>
        <div id="timer-label">{this.state.timerType}</div>
        <div id="time-left">{this.timeDisplay()}</div>
        <div class="row">
          <div class="col-2"></div>
          <button class="time col-3" id="start_stop" onClick={this.runClock}>Start/Stop</button>
          <div class="col-2"></div>
          <button class="time col-3" id="reset" onClick={this.resetClock}>Reset</button>
          <div class="col-2"></div>
        </div>

        {/* <audio id="beep" src="https://www.soundjay.com/buttons/sounds/beep-02.mp3"></audio> */}
        <audio id="beep" src="https://www.soundjay.com/misc/sounds/magic-chime-01.mp3"></audio>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

