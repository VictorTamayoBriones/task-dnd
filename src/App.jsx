import { useState } from "react";
import { ReactSortable } from 'react-sortablejs';

function App() {
  const [tasks, setTasks]=useState([
    {
      id:1,
      name: 'Do homework'
    },
    {
      id:2,
      name: 'Run at morning'
    },
    {
      id:3,
      name: 'Attend the job interview'
    },
    {
      id:4,
      name: 'Go home'
    },
  ])

  const [process, setProcess]=useState([
    {
      id: 9,
      name: 'Test dnd'
    },
    {
      id: 19,
      name: 'jhksjhdkajhskdjas'
    },
  ])

  const [finish, setFinish]=useState([])

  return (
    <main>
      <div className="col-task">  
      <h2>Task</h2>
        <ReactSortable list={tasks} setList={setTasks} multiDrag group='test' animation={200} delayOnTouchStart={true} delay={2}>
          {
            tasks.map(task=>(
              <div key={task.id} className="task-card">
                {task.name}
              </div>
            ))
          }
        </ReactSortable>
      </div>
      
      <div className="col-task">
        <h2>Process</h2>
        <ReactSortable list={process} setList={setProcess} multiDrag group='test' animation={200} delayOnTouchStart={true} delay={2}>
          {
            process.map(item => (
              <div key={item.id} className="task-card">
                {item.name}
              </div>
            ))
          }
        </ReactSortable>
      </div>

      <div className="col-task">
        <h2>Finish</h2>
        <ReactSortable list={finish} setList={setFinish} multiDrag group='test' animation={200} delayOnTouchStart={true} delay={2}>
          {
            finish.map(item => (
              <div key={item.id} className="task-card">
                {item.name}
              </div>
            ))
          }
        </ReactSortable>
      </div>
    </main>
  )
}

export default App
