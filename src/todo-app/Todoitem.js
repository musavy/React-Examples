import React from 'react';
function TodoItem(props){
    const completedStyle={
        fontStyle:'italic',
        color:'tomato',
        textDecoration:'line-through'
    }
    return (
        <div className="todo-item"
        onClick={()=>props.handleChange(props.todo.id)}>
        <input onChange="completed"
        type="checkbox"
        checked={props.todo.completed}></input>
        <p style={props.todo.completed ? completedStyle:null}>{props.todo.text}></p>
        </div>
    )
}
export default TodoItem;