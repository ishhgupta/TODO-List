import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some flowers'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
     todo.id = Math.random();
     let todos = [...this.state.todos,todo];
     this.setState({
       todos: todos
     })
  }
  render(){
    return (
      <div className="todo-app container">
       <h1 className="center blue-text">ToDo's</h1>
       <Todos todos = {this.state.todos} deleteToDo = {this.deleteTodo}/>
       <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
