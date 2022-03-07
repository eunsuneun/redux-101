import { createStore } from "redux";

const plus = document.getElementById('plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const PLUS = "PLUS";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS: 
      return count + 1;
    case MINUS: 
      return count - 1;
    default:
      return count;
  }
};
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

const handlePlus = () => {
  store.dispatch({type: PLUS});
};

const handleMinus = () => {
  store.dispatch({type: MINUS});
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);