import Task from './Task'

const Tasks = ({ tasks,onDelete,onToggle,index }) => {
 
    return (
        <>
        {tasks.map((task) => 
            <Task key={ index } task = {task} onToggle={onToggle} onDelete={onDelete}/>
            )}
            </>
    )

}

export default Tasks
