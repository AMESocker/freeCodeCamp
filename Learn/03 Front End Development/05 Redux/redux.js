/*//? 1 Create a Redux Store
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

let store = Redux.createStore(reducer);
*/
/* //? 2 Get State from the Redux Store
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
let currentState = store.getState(); */
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
//? 5 Dispatch an Action Event
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
