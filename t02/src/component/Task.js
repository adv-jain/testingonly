function Task({ task, handleDone }) {
  return (
    <>
      <div>
        <label className={(task.done ? 'text-decoration-line-through text-dark' : 'text-danger')}>
          <input type="checkbox" onClick={() => handleDone(task.id)} className='form-check d-inline-block me-3' checked={task.done ? 'checked' : ''} style={{ width: "20px", height: "20px" }} />
          {task.name}

        </label>
      </div>
    </>
  );
}

export default Task;