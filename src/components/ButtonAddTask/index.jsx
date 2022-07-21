import { Button } from "./style"

export const AddTaskButton = ({onClick}) =>{
    return(
        <Button onClick={()=>onClick(true)} >Add Task</Button>
    )
}