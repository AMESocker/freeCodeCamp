/*//? 1 Create a Redux Store
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

//^let store = Redux.createStore(reducer);
*/
/* //? 2 Get State from the Redux Store
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
^let currentState = store.getState(); */
/* //? 3 Define a Redux Action
// Define an action here:
const action = {
  type: 'LOGIN'
} */
/* //? 4 Define an Action Creator
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action;
} */
/* //? 5 Dispatch an Action Event
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction()); */
/* //? 6 Handle an Action in the Store
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === 'LOGIN') {
    return {
      login: true
    }
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
}; */
/* //? 7 Use a Switch Statement to Handle Multiple Actions
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      }
    case 'LOGOUT':
      return {
        authenticated: false
      }
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
}; */
//? 8 Use const for Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};