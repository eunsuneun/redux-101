import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

const Home = ({ toDos, addTodo }) => {
  const $input = useRef();
  const [text, setText] = useState("");
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
    $input.current.focus();
  };
  return(
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={text} onChange={onChangeInput} ref={$input}/>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return { toDos: state }
};

function mapDispatchToProps(dispatch) {
  return { 
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);