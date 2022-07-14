const Task = ({description, done, dueDate = "", dueTime = "", tag = ""}) => {
  return (
    <>
      <p className="my1">{`Details: ${description}`}</p>
      <p className="my1">
        <span>Due:</span>
        <span className="ml2">{dueDate}</span>
        <span className="ml2">{dueTime}</span>
      </p>
      <p className="my1">{`Tag: ${tag}`}</p>
      <p className="my1">{`State: ${done ? "Done" : "Pending"}`}</p>
      <div className="d-flex mt4 justify-between">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
};

export default Task;
