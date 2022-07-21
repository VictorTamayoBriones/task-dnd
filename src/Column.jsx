import { forwardRef, useState } from "react"
import { ReactSortable } from "react-sortablejs";
import { TaskStyled } from "./styled-components/Task-Styled";


export const Column = ({columnName, grupo}) =>{

    const[list, setList]=useState([{}]);

    const CustomComponent = forwardRef((props, ref) => {
        return <div className="test" ref={ref}>{props.children}</div>;
    });

    return(
            
        <Prueba className="col-task">  
            <h2>{columnName}</h2>
            <ReactSortable  tag={CustomComponent}  >
                {list?.map(task=>(
                <TaskStyled key={task.id} className="task-card">
                    {task.name}
                </TaskStyled>
                ))}
            </ReactSortable>
        </Prueba>
        
    )
}

