import { useState, useEffect } from 'react';
import Task from './component/Task'

function App() {
  let [show, setShow] = useState(true)
  let [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: false },
    { id: 3, name: 'Task 3', done: false },
  ])

  let [count, setCount] = useState(tasks.length)

  function handleDone(id) {
    setTasks(tasks.map(task => {

      if (task.id === id) {
        task.done = !task.done
        task.done === true && setCount(count - 1)
        console.log(count)
      }
      return task
    }))
  }

  // useEffect(() => {
  //   console.log(count)
  //   console.log(tasks.length)
  //   tasks.map(task => task.done ? setCount(count++) : setCount(count--))
  // }, [])

  function addTask(e) {
    e.preventDefault();
    let newTask = {
      id: tasks.length + 1,
      name: document.getElementById('task-input').value,
      done: false
    }
    setTasks([...tasks, newTask])
  }


  const finish = () => {
    document.getElementById('output').innerHTML = 'All tasks completed'
    document.body.style.background = 'url(https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif)'

    setTimeout(() => {
    document.body.style.background = ''
    }, 3000);
  }

  // useEffect(() => {
  //   // document.body.style.background = URL('https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif')
  // }, [finish])

  return (
    <div className='container my-5'>

      <form className='form-group d-flex gap-3 mb-4'>
        <button type='button' className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
        <input type="text" className='form-control' id='task-input' />
        <button type='submit' className='btn btn-primary text-nowrap' onClick={(e) => addTask(e)}>Add Task</button>
      </form>

      <div className='mt-5 d-flex flex-column gap-5 fs-3'>{show && tasks.map((task) => (
        <Task key={task.id} task={task} handleDone={handleDone} />
      ))}</div>

      <div className='mt-5' id='output'>{count <= 0 ? finish() : 'Still work to do!'}</div>

    </div>
  );
}

export default App;