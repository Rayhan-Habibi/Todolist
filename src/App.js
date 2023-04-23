import { useState } from 'react';
import './App.css';
import { Icon } from '@iconify/react';

function App() {
 
  const [items, setItems] = useState('');

  const [todoData, setTodoData] = useState([]);

  function handleChange(e){
    setItems(e.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (items == "") {
      window.alert("Task cannot be empty")
    } else {
    const id = todoData.length + 1;
    setTodoData((prev) => [
      ...prev,
      {
        id: id,
        task: items,
        complete: false,
      },
    ]);
    setItems("");}
  };

  todoData.sort(function (a,b) {return b.id - a.id});

  const handleToggle = (id) => {
    let mapped = todoData.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoData(mapped);
  }

  const handleClear = () => {
    for (var i = 0; i <= todoData.map((e) => e.id); i++){
      if (todoData[i].conpleted = true){
        setTodoData(todoData.splice(i, 1))
      }
    }
  }
  return (
    <div className='flex flex-col'>
      <h1 className='inline m-5 text-4xl md:mt-20 mb-10 text-center'>Routines</h1>
      <form>
        <div className='conatiner flex flex-row justify-center my-4 mx-1 md:justify-center md:px-4 '>
          <input className='md:text-2xl focus:outline-0 w-72 h-10 text-xl border-b-2 pb-6 border-black p-3' placeholder='Type your task here!' value={items} onInput={handleChange} type='text'/>
          <button className='md:mx-6 md:h-10 md:w-10 w-10 bg-black text-white text-xl ml-5' onClick={handleClick}>+</button>
        </div>
      </form>
      <div className="flex m-0 justify-center">
        <div className="Container md:w-96 md:h-96 flex w-11/12 flex-col  h-72 justify-start overflow-y-auto justify-items-strecth">
          {
            todoData.map(
            (todo) => 
            <div className='flex justify-between'>
            
            <p key={todo.id} className={`mx-5 my-2 text-xl`}>{todo.task}</p> 
            <Icon icon="material-symbols:check-box" width="35" height="35"  className='mr-2 text-gray-300 active:text-gray-700 hover:text-gray-500' />
            
            </div>
            )
          }
        </div>
      </div>
      <div className="flex justify-center">
        <button className='text-xl shadow-2xl p-2 text-white bg-black w-5/12 md:max-w-xs' onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
