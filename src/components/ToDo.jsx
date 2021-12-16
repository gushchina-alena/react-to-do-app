function ToDo({ task, removeTask }) {
    return (
        <div key={task.id} className="item-todo">
            <div>
                {task.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo