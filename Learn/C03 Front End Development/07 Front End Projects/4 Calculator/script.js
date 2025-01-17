
let typedNumbers = []
//react component
class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button id="clear" onClick={this.props.clearDisplay}>AC</button>
        <button id="divide" onClick={this.props.operators.bind(this, '/')}>/</button>
        <button id="multiply" onClick={this.props.operators.bind(this, '*')}>*</button>
        <button id="seven" onClick={this.props.updateDisplay.bind(this, '7')}>7</button>
        <button id="eight" onClick={this.props.updateDisplay.bind(this, '8')}>8</button>
        <button id="nine" onClick={this.props.updateDisplay.bind(this, '9')}>9</button>
        <button id="subtract" onClick={this.props.operators.bind(this, '-')}>-</button>
        <button id="four" onClick={this.props.updateDisplay.bind(this, '4')}>4</button>
        <button id="five" onClick={this.props.updateDisplay.bind(this, '5')}>5</button>
        <button id="six" onClick={this.props.updateDisplay.bind(this, '6')}>6</button>
        <button id="add" onClick={this.props.operators.bind(this, '+')}>+</button>
        <button id="one" onClick={this.props.updateDisplay.bind(this, '1')}>1</button>
        <button id="two" onClick={this.props.updateDisplay.bind(this, '2')}>2</button>
        <button id="three" onClick={this.props.updateDisplay.bind(this, '3')}>3</button>
        <button id="equals" onClick={this.props.equalOperator.bind(this, '=')}>=</button>
        <button id="zero" onClick={this.props.updateDisplay.bind(this, '0')}>0</button>
        <button id="decimal" onClick={this.props.decimalOperator.bind(this, '.')}>.</button>
      </div>
    );
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    }
    this.clearDisplay = this.clearDisplay.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.operators = this.operators.bind(this);
    this.decimalOperator = this.decimalOperator.bind(this);
    this.equalOperator = this.equalOperator.bind(this);
  
  }
  clearDisplay() {
    typedNumbers = []
    
    console.log('clear', display)

    this.setState({
      display: 0,
    });

  }
  updateDisplay(value) {
    let numberValue = parseInt(value);
    if (!typedNumbers[0] && value == 0) {return}
    typedNumbers.push(numberValue)
    let displayNumbers = typedNumbers.join('')
    
    console.log(typedNumbers,display,displayNumbers)

    this.setState({
      display: displayNumbers,
      });
      
  }
  //The sequence "5 * - + 5" = should produce an output of  "10" : expected '-25' to equal '10'
  operators(value) {
    let operatorValue = value;
    typedNumbers.push(operatorValue)
    let displayOperators = typedNumbers.join('')

    let operators = ['+', '*', '/', '-']

    if (operators.includes(typedNumbers[typedNumbers.length - 2])) {
      if(typedNumbers[typedNumbers.length - 2] === '-') {
        typedNumbers.splice(typedNumbers.length - 3, 2)
      }

    }
    if(operators.includes(typedNumbers[typedNumbers.length - 2]) && typedNumbers[typedNumbers.length - 1] !== '-'){
      typedNumbers.splice(typedNumbers.length - 2, 1)
      }



 

    this.setState({
      display: displayOperators,
    });
  }
  decimalOperator(value) {
    let decimalValue = value;
    let operators = ['+', '-', '*', '/']
   //if typedNumbers includes an operator, another decimal can be added

    let numberOfOperators = typedNumbers.filter((item) => operators.includes(item)).length
    let numberOfDecimals = typedNumbers.filter((item) => item == '.').length
    if (numberOfOperators < numberOfDecimals) return

    typedNumbers.push(decimalValue)
    let displayDecimal = typedNumbers.join('')

    this.setState({
      display: displayDecimal,
    });
  }
  equalOperator() {
    let result = eval(this.state.display)
    typedNumbers = [result]
    console.log(result, typedNumbers)

    this.setState({
      display: result.toString(),
    })
  }
  render() {
    return (
      <div id="calculator">
        <div id="display">{this.state.display}</div>
        <Buttons updateDisplay={this.updateDisplay} operators={this.operators} decimalOperator={this.decimalOperator} equalOperator={this.equalOperator} clearDisplay={this.clearDisplay} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
