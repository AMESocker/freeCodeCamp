/*
//* User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").

//* User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").

//* User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

//* User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".

//* User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.

//* User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

//* User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").
*/
//todo User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

//todo User Story #9: I can see a clickable element with a corresponding id="start_stop".

//todo User Story #10: I can see a clickable element with a corresponding id="reset".

//todo User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.

//todo User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.

//todo User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.

//todo User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

//todo User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.

//todo User Story #16: I should not be able to set a session or break length to <= 0.

//todo User Story #17: I should not be able to set a session or break length to > 60.

//todo User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

//todo User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

//todo User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

//todo User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

//todo User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

//todo User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

//todo User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

//todo User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

//todo User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

//todo User Story #27: The audio element with id="beep" must be 1 second or longer.

//todo User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div id="clock">
        <h1>25 + 5 Clock</h1>
        <div id="break-label">Break Length</div>
        <div id="break-length">5</div>
        <button id="break-decrement">-</button>
        <button id="break-increment">+</button>
        <div id="session-label">Session Length</div>
        <div id="session-length">25</div>
        <button id="session-decrement">-</button>
        <button id="session-increment">+</button>
        <div id="timer-label">Session</div>
        <div id="time-left">25:00</div>
        <button id="start_stop">Start/Stop</button>
        <button id="reset">Reset</button>
        <audio id="beep" src="https://www.soundjay.com/buttons/sounds/beep-02.mp3"></audio>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

