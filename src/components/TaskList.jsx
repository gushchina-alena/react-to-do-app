function TaskList({ task, deleteTask, isDone }) {
    return (
        <div key={task.id} className="item-todo">
            <div className={task.done ? 'line-through item-text' : 'item-text'}
            onClick={(e) => isDone(task.id)}>
                {task.task}
            </div>
            <div className="item-delete" onClick={() => deleteTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default TaskList; 