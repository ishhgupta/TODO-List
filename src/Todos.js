import React from 'react';

const Todos = ({todos, deleteToDo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key ={todo.id}>
                    {/* <span>{todo.content}</span> */}
                    <span onClick = {()=> deleteToDo(todo.id)}>{todo.content}</span>
                    {/* <button onClick= {()=> deleteToDo(todo.id)}>Done</button> */}
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left , YAY!</p>
    ) 
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;