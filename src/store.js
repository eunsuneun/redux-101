import { createStore } from "redux";

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
};
const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: {
      const newState = {text: action.text, id: Date.now()};
      return [newState, ...state];
    }
    case DELETE_TODO: {
      const newState = state.filter(toDo => toDo.id !== action.id);
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo
};

export default store;