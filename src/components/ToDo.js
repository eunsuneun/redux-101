import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, id, onClickButton }) => {
  return(
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickButton}>DEL</button>
    </li>
  )
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickButton: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
};

export default connect(null, mapDispatchToProps) (ToDo);