/* //? 1 Getting Started with React Redux
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Change code above this line
  render() {
    return <div />
  }
}; */
/* //? 2 Manage State Locally First
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }
  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line 
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        <button onClick={this.submitMessage.bind(this)}>Add message</button>
        <ul>
          {this.state.messages.map((message, index) => <li key={index}>{message}</li>)}
        </ul>
        { /* Change code above this line 
      </div>
    );
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(<DisplayMessages />) */
/* //? 3 Extract State Logic to Redux
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}
const store = Redux.createStore(messageReducer);

ReactDOM.createRoot(document.getElementById('root')).render(<DisplayMessages />) */
//? 4 Use Provider to Connect Redux to React
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // Change code above this line
};
ReactDOM.createRoot(document.getElementById('root')).render(<DisplayMessages />)