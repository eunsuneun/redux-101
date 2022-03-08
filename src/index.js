import { createStore } from "redux";
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO, 
    text, 
  }
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO, 
    id
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = {text: action.text, id: Date.now()};
      return [newState, ...state ]
    }
    case DELETE_TODO: {
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    }
    default:
      return state;
  }
};
const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text))
};
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};
const paintToDos = () => {
  $ul.innerHTML ="";
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const $li = document.createElement('li');
    const $button = document.createElement('button');
    $button.innerText ='삭제';
    $button.addEventListener('click', dispatchDeleteTodo)
    $li.id = toDo.id;
    $li.innerText = toDo.text;
    $li.appendChild($button);
    $ul.appendChild($li);
  })
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = $input.value;
  $input.value = "";
  dispatchAddTodo(toDo);
  $input.focus();
};

$form.addEventListener('submit', onSubmit);