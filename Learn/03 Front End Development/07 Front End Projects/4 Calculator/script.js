
//react component
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div id="calculator">
        <div id="display">0</div>
        <button id="clear" className="jumbo">AC</button>
        <button id="divide">/</button>
        <button id="multiply">x</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="subtract">-</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="add">+</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
        <button id="equals" className="jumbo">=</button>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
