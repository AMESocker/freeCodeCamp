class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      let audio = document.getElementById(e.key.toUpperCase()).childNodes[1];
      if (audio) {
        audio.play();
        let displayText = document.getElementById('display-text');
        displayText.innerHTML = audio.innerHTML;
      }
    }
    )
  }
  handleClick = (e) => {
    let audio = document.getElementById(e.target.id).childNodes[1];
    console.log(audio);
    audio.play();
    let displayText = document.getElementById('display-text');
    displayText.innerHTML = e.target.childNodes[1].innerHTML;
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div id="drum-pads">
            <button onClick={this.handleClick} id="Q" className="drum-pad">Q
              <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip">Heater-1</audio>
            </button>
            <button onClick={this.handleClick} id="W" className="drum-pad">W
              <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip">Heater-2</audio>
            </button>
            <button onClick={this.handleClick} id="E" className="drum-pad">E
              <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip">Heater-3</audio>
            </button>
            <button onClick={this.handleClick} id="A" className="drum-pad">A
              <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip">Heater-4</audio>
            </button>
            <button onClick={this.handleClick} id="S" className="drum-pad">S
              <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip">Clap</audio>
            </button>
            <button onClick={this.handleClick} id="D" className="drum-pad">D
              <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip">Open High-Hat</audio>
            </button>
            <button onClick={this.handleClick} id="Z" className="drum-pad">Z
              <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip">Kick and Hat</audio>
            </button>
            <button onClick={this.handleClick} id="X" className="drum-pad">X
              <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip">Kick</audio>
            </button>
            <button onClick={this.handleClick} id="C" className="drum-pad">C
              <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip">High Hat</audio>
            </button>
          </div>
          <div id="display-text"></div>
        </div>
      </div>
    );
  }
}


ReactDOM.createRoot(document.getElementById('app')).render(<DrumMachine />)