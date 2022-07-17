import { forwardRef, useState, createRef } from "react";
import { ReactSortable } from 'react-sortablejs';

const CustomComponent = forwardRef((props, ref) => {
  return <div className="test" ref={ref}>{props.children}</div>;
});

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
        <ReactSortable tag={CustomComponent} list={tasks} setList={setTasks} multiDrag group='test' >
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
        <ReactSortable tag={CustomComponent} list={process} setList={setProcess} multiDrag group='test'>
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
        <ReactSortable tag={CustomComponent} list={finish} setList={setFinish} multiDrag group='test'>
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
