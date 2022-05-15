import {List, Timer} from '../components';
import tasks from '../data/tasks.json';

const Tasks = () => {
  return (
    <div className="p-4">
      <Timer minutes={25} seconds={0} className="w-5 mx max-vw px-2"
        fontClass="f-size-2" start="Start" stop="Stop" />
      <List data={tasks.tasks} renderItem={Task} />
    </div>
  );
}

const Task = ({title, description, completed, dueDate, dueTime}) => {
  const bordColor = `bord-${completed ? 'green' : 'gray-light'}`;
  return (
    <div className={`round-2 my-2 p-2 bord bord-2 ${bordColor}`}>
      <h3 className="mb-1">{title}</h3>
      <p className="my-1">{description}</p>
      <p className="my-1">
        <span>Due:</span>
        <span className="ml-2">{dueDate}</span>
        <span className="ml-2">{dueTime}</span>
      </p>
    </div>
  );
};

export default Tasks;
