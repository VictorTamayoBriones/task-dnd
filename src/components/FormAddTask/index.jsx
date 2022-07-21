import { useEffect, useState } from "react"
import { Overlay } from "./style"
import { v4 } from "uuid"
import { Form } from "../../styled-components/FormAddTask";

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
        if( newTaskData.name != '' ){
            setTasks([...tasks, {id: uuid, name: newTaskData.name}]);
            onClick(false);
            setNewTaskData({name: ''})
        }else{
            alert('Completa el campo')
        }

    }

    const handleCancel = (e) =>{
        e.preventDefault();
        onClick(false);
    }
    return(
        <Overlay isOnAddTask={isOnAddTask} >
            <Form>
                <h2>Add New Task</h2>
                <input type="text" placeholder="Create Task" value={newTaskData.name} onChange={handleChange} />
                <div className="buttons">
                    <button onClick={handleSave} >Save Task</button>
                    <button onClick={handleCancel} >Cancel</button>
                </div>
            </Form>
        </Overlay>
    )
}