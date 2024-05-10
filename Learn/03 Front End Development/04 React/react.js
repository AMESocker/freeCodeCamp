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
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))*/
//? 18 Use PropTypes to Define the Props You Expect
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
