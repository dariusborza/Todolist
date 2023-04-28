import React, {useState} from 'react'
import './App.css';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Grocery shopping', rowAssigned: 'Mom'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'Grandmom'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Mom'},
    {rowNumber: 4, rowDescription: 'Organize the glasses', rowAssigned: 'Daughter'}
  ]
  )
  //adaugam in Todo si respectam indexul fiecarei activitati
  const addTodo= ( description: string, assigned: string) => {
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
    }
  //stergem valori din Todo folosind filtering of the array filter()
  const deleteTodo=(deleteTodoRowNumber: number) =>{
    let filtered = todos.filter(function (value){
       return value.rowNumber !== deleteTodoRowNumber;
    });
     setTodos(filtered);
  }
  
  return (
    //mt-5 container pentru pozitie table
    //card-uri pentru aspect prin bootstrap
    //Todo table impreuna cu butonul de adaugare 
    //Form impreuna cu un buton
    <div className='mt-5 container'> 
      <div className="card">
        <div className="card-header">
          Smart Fridge To Do list
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-secondary'>
            {showAddTodoForm ? 'Done' : 'New Todo'}
          </button>
          {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

