const calendarStyle = {
  width: "700px",
};

const hourGapStyle = {
  height: "25px",
}

const cellStyle = {
  height: "50px",
};

const events = [
  {
    title: "Emprendimiento",
    day: 1,
    hourStart: 15,
    hourEnd: 17,
  },
  {
    title: "Estudio",
    day: 2,
    hourStart: 7,
    hourEnd: 11,
  }
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayHours = [...Array(24).keys()];

const Calendar = () => {
  return (
    <div className="row p2 mx w txt-center"
      style={calendarStyle}>
      <h1 className="mt3 mb2">Calendar</h1>
      <div className="d-flex justify-between">
        <button>New</button>
        <button>Filter</button>
      </div>
      <div className="d-flex pos-rel fs2">
        <div className="mx1">
          <div style={hourGapStyle} />
          {
            dayHours.map(hour => (
              <p className="d-flex align-center" style={cellStyle}>{hour}</p>
            ))
          }
        </div>
        <Grid />
      </div>
    </div>
  );
}

const Grid = () => (
  <table className="w10 round2 pos-rel word-break">
    <tbody>
      <tr className="sticky">
        {
          weekDays.map(day => (
            <th key={day} className="col" style={cellStyle}>{day}</th>
          ))
        }
      </tr>
      {
        dayHours.map(() => (
          <tr>
            {
              weekDays.map(() => <Cell title="" />)
            }
          </tr>
        ))
      }
    </tbody>
    {
      events.map(event => <Event {...event} />)
    }
  </table>
);

const Cell = ({title}) => (
  <td className="bord bord1 bord-gray-dark"
    style={cellStyle}>{title}</td>
);

const Event = ({title, day, hourStart, hourEnd}) => {
  const eventStyle = {
    width: `${100 / 7}%`,
    height: `${(hourEnd - hourStart) * 50}px`,
    top: `${hourStart * 50}px`,
    left: `${day / 7 * 100}%`,
    padding: "3px",
  };
  return (
    <div className="pos-abs" style={eventStyle}>
      <p className={`bg-primary card w10 h10
        d-flex justify-center align-center`}>{title}</p>
    </div>
  );
}

export default Calendar;
