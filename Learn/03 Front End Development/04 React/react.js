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