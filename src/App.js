import { useState } from 'react';
import './App.css';

function App() {
 
  const [items, setItems] = useState('');

  const [todoData, setTodoData] = useState([]);

  function handleChange(e){
    setItems(e.target.value)
  }
  const handleClick = (event) => {
    event.preventDefault()
    const id = todoData.length + 1;
    setTodoData((prev) => [
      ...prev,
      {
        id: id,
        task: items,
        complete: false,
      },
    ]);
    setItems("");
  };

  const handleToggle = (id) => {
    let mapped = todoData.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoData(mapped);
  }
  const clearButton = (id) =>{
    let mapped = todoData.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoData(mapped);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <div className="container">
          <input placeholder='Type your task here!' value={items} onInput={handleChange} type='text'/>
          <button className='plus' onClick={handleClick}>+</button>
        </div>
      </form>
      <div className="container2">
      <div className="listContainer">
        {
        todoData.map(
          (todo) => <p key={todo.id} className={todo.complete? "complete" : ""} onClick={()=>handleToggle(todo.id)} style={{textDecoration: todo.complete? 'line-through' : 'none'}} >{todo.task}</p>
          )
        }
      </div>
      </div>
      <div className="clear">
        <button className='clearButton'>Clear Complete Todo</button>
      </div>
    </div>
  );
}

export default App;
