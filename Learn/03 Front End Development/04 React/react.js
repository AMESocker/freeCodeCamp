/*//? 01 Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>*/
/*//? 02 Create a Complex JSX Element
// const JSX = 
// <div>
//   <h1>New</h1>
//   <p>costs</p>
//   <ul>
//     <li>more</li>
//     <li>text</li>
//     <li>info</li>
//   </ul>
// </div>*/
  //? 03 Add Comments in JSX
// const JSX = (
//   <div>
//     {/* Commented in JSX */}
//     <h1>This is a block of JSX</h1>
//     <p>Here's a subtitle</p>
//   </div>
// );
/*//? 04 Render HTML Elements to the DOM
// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );*/
/*//? 05 Define an HTML Class in JSX
// const JSX = (
//   <div className="myDiv">
//     <h1 >Add a class to this div</h1>
//   </div>
// );*/
/*//? 06 Learn About Self-Closing JSX Tags
// const JSX = (
//   <div>
//     <h2>Welcome to React!</h2> <br />
//     <p>Be sure to close all tags!</p>
//     <hr />
//   </div>
// );
// ReactDOM.render(JSX, document.getElementById('root'))*/
/*//? 07 Create a Stateless Functional Component
// const MyComponent = function() {
  // Change code below this line
// return(

//   <div>some string of text</div>
// );

  // Change code above this line
// }*/
/*//? 08 Create a React Component
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // Change code below this line
//     return (
//       <div>
//         <h1>Hello React!</h1>
//       </div>
//     )
//     // Change code above this line
//   }
// };
// ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('root'))*/
/*//? 09 Create a Component with Composition
// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         {  Change code below this line  }
//         <ChildComponent />

//         { Change code above this line }
//       </div>
//     );
//   }
// };

// ReactDOM.render(React.createElement(ParentComponent, null), document.getElementById('root'))*/
/*//? 10 Use React to Render Nested Components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      // {  Change code below this line  }
        <TypesOfFruit />
      // {  Change code above this line  }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {  Change code below this line  }
          <Fruits />
        { Change code above this line  }
      </div>
    );
  }
};
ReactDOM.render(React.createElement(TypesOfFood, null), document.getElementById('root'))*/
/*//? 11 Compose React Components
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line  }
        <NonCitrus />
          <Citrus />
        { /* Change code above this line  }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line  }
        <Fruits />
        { /* Change code above this line  }
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(React.createElement(TypesOfFood, null), document.getElementById('root'))*/
/*//? 12 Render a Class Component to the DOM
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))*/
/*//? 13 Write a React Component from Scratch
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 14 Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date} </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
ReactDOM.render(<Calendar />, document.getElementById('root'))*/
/*//? 15 Pass an Array as Props
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "clean"]}/>
      </div>
    );
  }
};
ReactDOM.render(<ToDo />, document.getElementById('root'))
*/
/*//? 16 Use Default Props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {items:0}
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
*/
/*//? 17 Override Default Props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
*/
/*//? 18 Use PropTypes to Define the Props You Expect
import PropTypes from 'prop-types';
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired}
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
*/
/*//? 19 Access Props Using this.props
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <h1>{this.props.message}</h1>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <p>Hello,

          </p>
    )


ReactDOM.render(<Welcome />, document.getElementById('root'))
*/
/*//? 20 Review Using Props with Stateless Functional Components
// import PropTypes from 'prop-types';

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
  return <p>{props.name}</p>
}
Camper.defaultProps = { name: 'CamperBot' }
// Camper.propTypes = { name: PropTypes.string.isRequired }
ReactDOM.render(<CampSite />, document.getElementById('root'))*/
/*//? 21 Create a Stateful Component
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: 'Aron'
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))*/
/*//? 22 Render State in the User Interface
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 23 Render State in the User Interface Another Way
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name
    // Change code above this line
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 24 Set State with this.setState
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 25 Bind 'this' to a Class Method
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this)
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 26 Use State to Toggle an Element
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('root'))
*/
/*//? 27 Write a Simple Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }    
  reset() {
    this.setState({
      count: 0
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
ReactDOM.render(<Counter />, document.getElementById('root'))
*/
/*//? 28 Create a Controlled Input
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this)
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        //  Change code below this line 
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        // Change code above this line 
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
*/
/*//? 29 Create a Controlled Form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    this.setState({
      submit: this.state.input
    })
    event.preventDefault()
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line 
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Change code above this line 
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line 
        <h1>{this.state.submit}</h1>
        // Change code above this line 
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'))
*/
/*//? 30 Pass State as Props to Child Components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line 
          <Navbar name={this.state.name} />
         {/* Change code above this line 
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line 
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Change code above this line 
    </div>
    );
  }
};
ReactDOM.render(<MyApp />, document.getElementById('root'))
*/
/*//? 31 Pass a Callback as Props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
        { /* Change code above this line 
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<MyApp />, document.getElementById('root'))
*/
/*//? 32 Use the Lifecycle Method componentWillMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    // Change code below this line
    console.log('MyComponent will mount')
    // Change code above this line
  }
  render() {
    return <div />
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />)
*/
/*//? 33 Use the Lifecycle Method componentDidMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line 
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line 
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />)
*/
/*//? 34 Add Event Listeners
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />)
*/
/*//? 35 Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if (nextProps.value % 2 == 0) {
      return true
    } else {
      return false
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Controller />)
*/
/* //? 36 Introducing Inline Styles
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color:"red", fontSize: 72}}>Big Red</div>
    );
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<Colorful />)
 */
/* //? 37 Add Inline Styles in React
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
}
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<Colorful />) 
*/
/* //? 38 Use Advanced JavaScript in React Render Method
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line 
          {answer}
          {/* Change code above this line 
        </p>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<MagicEightBall />) 
 */
/* //? 39 Render with an If/Else Condition
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
    
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />) 
 */
/* //? 40 Use && for a More Concise Conditional
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
          {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />) 
 */
//? 41 Use a Ternary Expression for Conditional Rendering
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<CheckUserAge />) 