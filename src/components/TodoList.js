import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos,setTodos]=useState([])
//add functionality
    const addTodo=todo=>{
        if (!todo.text || /^\s*s/.test(todo.text)) {
            return;
        }
        const newTodos=[todo, ...todos]
        setTodos(newTodos)
        console.log(todo, ...todos);
    };

    const updateTodo=(todoId, newValue) => {
      if (!newValue.text || /^\s*s/.test(newValue.text)) {
        return;
    }
    setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)))
  }


// remove functionality
    const removeTodo=id=>{
        const removeArray =[...todos].filter(todo=>todo.id!==id);

        setTodos(removeArray)
    };
// complete todo list
    const completeTodo=id=>{
      let updatedTodos=todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete=!todo.isComplete
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

  return (
    <div>
      
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo}
      updateTodo={updateTodo}
       />
    </div>
  )
}

export default TodoList
