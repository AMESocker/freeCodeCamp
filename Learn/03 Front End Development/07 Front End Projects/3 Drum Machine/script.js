class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div id="drum-pads">
            <button id="Q" className="drum-pad">Q</button>
            <button id="W" className="drum-pad">W</button>
            <button id="E" className="drum-pad">E</button>
            <button id="A" className="drum-pad">A</button>
            <button id="S" className="drum-pad">S</button>
            <button id="D" className="drum-pad">D</button>
            <button id="Z" className="drum-pad">Z</button>
            <button id="X" className="drum-pad">X</button>
            <button id="C" className="drum-pad">C</button>
          </div>
          <div id="display-text"></div>
        </div>
      </div>
    );
  }
}


        ReactDOM.createRoot(document.getElementById('app')).render(<DrumMachine />)