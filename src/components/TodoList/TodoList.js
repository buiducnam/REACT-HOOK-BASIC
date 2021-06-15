import React from 'react';
import './TodoList.scss'
import PropTypes from 'prop-types';

TodoList.propTypes = {

};

function TodoList(props) {
    const { todos, onTodoClick } = props;

    const onClick = (id) => {
        onTodoClick(id);
    }

    return (
        <ul className="todo-list">
            {
                todos.map((todo, index) =>
                    <li key={index} onClick={() => onClick(todo.id)}>{todo.title}</li>
                )
            }
        </ul>
    );
}

export default TodoList;