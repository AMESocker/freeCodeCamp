/* Passed Tests
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. 
1. My calculator should contain a clickable element containing an "=" (equal sign) with a corresponding id="equals"
2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine"
3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide"
4. My calculator should contain a clickable element containing a "." (decimal point) symbol with a corresponding id="decimal"
5. My calculator should contain a clickable element with an id="clear"
6. My calculator should contain an element to display values with a corresponding id="display"
7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of "display"214ms
8. As I input numbers, I should be able to see my input in the element with the id of "display"206ms
9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit "=", the correct result should be shown in the element with the id of "display"421ms
10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.204ms
11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted649ms
12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points856ms
14. Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation

*/
/* Failed Tests

13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
The sequence "5 * - + 5" = should produce an output of "10" : expected '-25' to equal '10'
AssertionError: The sequence "5 * - + 5" = should produce an output of "10" : expected '-25' to equal '10'



*/

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

  operators(value) {
    let operatorValue = value;
    typedNumbers.push(operatorValue)
    let displayOperators = typedNumbers.join('')

    if(typedNumbers[typedNumbers.length - 2] == operatorValue) {
      console.log('operator', typedNumbers)
    }

    console.log(displayOperators)

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
