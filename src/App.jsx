import { forwardRef, useState } from "react";
import { ReactSortable } from 'react-sortablejs';
import { AddTaskButton } from "./components/ButtonAddTask";
import { FormAddTask } from "./components/FormAddTask";
import { Col } from "./styled-components/Column-styled";
import { Main } from "./styled-components/Main";

const CustomComponent = forwardRef((props, ref) => {
  return <div className="test" ref={ref}>{props.children}</div>;
});

function App() {
  const[tasks, setTasks]=useState([])

  const[process, setProcess]=useState([])

  const[finish, setFinish]=useState([])

  const[isAddTask, setIsAddTask]=useState(false);

  return (
    <Main>
      <FormAddTask isOnAddTask={ isAddTask } onClick={setIsAddTask} setTasks={setTasks} tasks={tasks} />
      <AddTaskButton onClick={setIsAddTask} />
      <Col>
      <h2>Pending</h2>
        <ReactSortable  tag={CustomComponent} list={tasks} setList={setTasks} multiDrag group='test' animation={200} ghostClass="hola" >
          {
            tasks.map(task=>(
              <div key={task.id} className="task-card">
                {task.name}
              </div>
            ))
          }
        </ReactSortable>
      </Col>
      
      <Col>
        <h2>Process</h2>
        <ReactSortable tag={CustomComponent} list={process} setList={setProcess} multiDrag group='test' animation={200} ghostClass="hola" >
          {
            process.map(item => (
              <div key={item.id} className="task-card">
                {item.name}
              </div>
            ))
          }
        </ReactSortable>
      </Col>

      <Col>
        <h2>Finalized</h2>
        <ReactSortable tag={CustomComponent} list={finish} setList={setFinish} multiDrag group='test' animation={200} ghostClass="hola" >
          {
            finish.map(item => (
              <div key={item.id} className="task-card">
                {item.name}
              </div>
            ))
          }
        </ReactSortable>
      </Col>
    </Main>
  )
}

export default App
