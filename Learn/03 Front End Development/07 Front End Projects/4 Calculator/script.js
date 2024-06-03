/*
//* User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

//*User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

//*User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", and id="divide".

//*User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

//*User Story #5: My calculator should contain a clickable element with an id="clear".

//*User Story #6: My calculator should contain an element to display values with a corresponding id="display".

//*User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

//* User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

//* User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
*/

//todo User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.


//todo User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

//todo User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

//todo User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

//todo User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

//todo User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).


let typedNumbers = []
//react component
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    }
  }
  clearDisplay() {
    typedNumbers = []
    this.setState({
      display: '0',
    });
  }
  updateDisplay(value) {
    let numberValue = parseInt(value);
    typedNumbers.push(numberValue)
    let displayNumbers = typedNumbers.join('')
    console.log(display)
    
    this.setState({
      display: displayNumbers,
    });
  }
  render() {
    return (
      <div id="calculator">
        <div id="display">{this.state.display}</div>
        <button id="clear" className="jumbo" onClick={this.clearDisplay.bind(this)}>AC</button>
        <button id="divide" onClick={this.updateDisplay.bind(this, '/')}>/</button>
        <button id="multiply" onClick={this.updateDisplay.bind(this, 'x')} >x</button>
        <button id="seven" onClick={this.updateDisplay.bind(this, '7')} >7</button>
        <button id="eight" onClick={this.updateDisplay.bind(this, '8')} >8</button>
        <button id="nine" onClick={this.updateDisplay.bind(this, '9')} >9</button>
        <button id="subtract" onClick={this.updateDisplay.bind(this, '-')} >-</button>
        <button id="four" onClick={this.updateDisplay.bind(this, '4')} >4</button>
        <button id="five" onClick={this.updateDisplay.bind(this, '5')} >5</button>
        <button id="six" onClick={this.updateDisplay.bind(this, '6')} >6</button>
        <button id="add" onClick={this.updateDisplay.bind(this, '+')} >+</button>
        <button id="one" onClick={this.updateDisplay.bind(this, '1')} >1</button>
        <button id="two" onClick={this.updateDisplay.bind(this, '2')} >2</button>
        <button id="three" onClick={this.updateDisplay.bind(this, '3')} >3</button>
        <button id="equals" onClick={this.updateDisplay.bind(this, '=')} >=</button>
        <button id="zero" onClick={this.updateDisplay.bind(this, '0')} >0</button>
        <button id="decimal" onClick={this.updateDisplay.bind(this, '.')} >.</button>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));
