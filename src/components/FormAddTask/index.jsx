import { useEffect, useState } from "react"
import { Overlay } from "./style"
import { v4 } from "uuid"

export const FormAddTask = ({isOnAddTask, onClick, setTasks, tasks}) => {
    const uuid = v4();

    const [newTaskData, setNewTaskData]=useState({
        name: ''
    })

    const handleChange = ({target:{value}}) =>{
        setNewTaskData({...newTaskData, name: value})
    }

    const handleSave = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {id: uuid, name: newTaskData.name}]);

        onClick(false);
        
        setNewTaskData({name: ''})
    }
    const handleCancel = (e) =>{
        e.preventDefault();
        onClick(false);
    }
    return(
        <Overlay isOnAddTask={isOnAddTask} >
            <form>
                <input type="text" placeholder="Task" value={newTaskData.name} onChange={handleChange} />
                <button onClick={handleSave} >Save Task</button>
                <button onClick={handleCancel} >Cancel</button>
            </form>
        </Overlay>
    )
}