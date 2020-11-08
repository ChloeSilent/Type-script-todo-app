import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import ITodo from "./interface";
type Todos = ITodo[];

const App: React.FC = () => {
 const [todos, setTodos] = useState<Todos>([])

    const onAddTodoHandler = (todo: string):void => {
     const newTodos = [...todos];
     const newToDo: ITodo = {
         title: todo,
         id: Date.now(),
         completed: false
     }
     newTodos.push(newToDo)
        setTodos(newTodos)
    }

    return (
        <>
            <Navbar/>
            <div className='container'>
                <TodoForm onAddTodo={onAddTodoHandler}/>
                <TodoList todos={todos}/>
            </div>
        </>
    );
}

export default App;
