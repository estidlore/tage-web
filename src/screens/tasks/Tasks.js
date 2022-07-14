import {createContext, useContext, useState} from "react";
import {List, Modal, Timer} from "../../components";
import {tasks} from "../../data/tasks.json";
import {IcoOk} from "../../icons";
import {click} from "../../util/funcs";

import Task from "./Task";

const sortTasks = () => tasks.sort((a, b) => {
  // by done
  if (a.done !== b.done) {
    return a.done ? 1 : -1;
  }
  // by due date
  if (a.dueDate !== b.dueDate) {
    return a.dueDate > b.dueDate ? 1 : -1;
  }
  // by due time
  if (a.dueTime !== b.dueTime) {
    return a.dueTime > b.dueTime ? 1 : -1;
  }
  // by title
  if (a.title !== b.title) {
    return a.title > b.title ? 1 : -1;
  }
  return 0;
});

const tasksStyle = {
  width: "500px",
};

const listStyle = {
  maxHeight: "75vh",
};

const TasksContext = createContext();

const Tasks = () => {
  const [task, setTask] = useState(0);
  const stShowFilter = useState(false);
  const stShowTask = useState(false);
  const showFilter = () => stShowFilter[1](true);
  const showTask = i => {
    setTask(i);
    stShowTask[1](true);
  };
  return (
    <div className="p5">
      <h1 className="mt4 mb2 txt-center">Pomodoro</h1>
      <Timer minutes={25} seconds={0} className="w5 mx wv-max px2"
        fontClass="fs4" start="Start" stop="Stop" />
      <h1 className="mt4 mb2 txt-center">Tasks</h1>
      <div className="w mx" style={tasksStyle}>
        <div className="d-flex justify-between">
          <button>New</button>
          <button onClick={showFilter}>Filter</button>
        </div>
        <TasksContext.Provider value={{showTask, task}}>
          <List data={tasks} renderItem={CardTask} style={listStyle} />
        </TasksContext.Provider>
      </div>
      <Modal stShow={stShowFilter} title="Filter">
        <Filters />
      </Modal>
      <Modal title={tasks[task].title} stShow={stShowTask} >
        <Task {...tasks[task]} />
      </Modal>
    </div>
  );
}

const Filter = ({label, options = []}) => (
  <div className="my1 d-flex align-center">
    <span className="mr1 w3">{`${label}:`}</span>
    <select className="w7">
      <option> - </option>
      {
        options.map(o => <option key={o}>{o}</option>)
      }
    </select>
  </div>
);

const Filters = () => (
  <div style={{width: "200px"}}>
    <Filter label="State" options={["Done", "Pending"]} />
    <Filter label="Due" options={["Today", "Tomorrow", "This Week"]} />
    <Filter label="Tag" options={["Work", "Personal", "Shopping", "Study"]} />
    <Filter label="Priority" options={[...Array(5).keys()].map(x=>x+1)} />
  </div>
);

const CardTask = (props) => {
  const {showTask} = useContext(TasksContext);
  const [done, setDone] = useState(props.done);
  const toggleDone = e => click(e, setDone, !done);
  const openTask = e => click(e, showTask, props.i);
  return (
    <button className="round2 my2 p3 bg-gray-dark d-block w10 txt-left"
      onClick={openTask}>
      <div className="d-flex align-center">
        <div className="flex-grow-1">
          <h4 className="mb1">{props.title}</h4>
          <p className="my1">
            <span>Due:</span>
            <span className="ml2">{props.dueDate}</span>
            <span className="ml2">{props.dueTime}</span>
          </p>
        </div>
        <button className="bg-none" onClick={toggleDone}>
          <IcoOk className={done ? 'green' : 'light'} />
        </button>
      </div>
    </button>
  );
};

export default Tasks;
