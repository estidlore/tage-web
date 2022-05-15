import {Component} from 'react';
import Button from './Button';
import ScrollPicker from './ScrollPicker';

const data = [];
for (let i = 0; i < 60; i++) {
  data.push(i);
}

const style = {
  width: "250px",
};

export class Timer extends Component {
  constructor(props) {
    super(props);
    const {minutes, seconds} = props;
    this.state = {
      active: false,
      minutes: minutes,
      seconds: seconds,
    }
  }

  start = () => {
    this.timer = setInterval(this.tick, 1000);
    this.setState({
      active: true,
      minutes: Math.min(Math.max(this.state.minutes, 0), 59),
      seconds: Math.min(Math.max(this.state.seconds, 0), 59),
    });
  }

  stop = () => {
    clearInterval(this.timer);
    this.setState({
      active: false
    });
  }

  tick = () => {
    const {minutes, seconds} = this.state;
    if (seconds > 0) {
      this.setState({
        seconds: seconds - 1
      });
    } else if (minutes > 0) {
      this.setState({
        minutes: minutes - 1,
        seconds: 59
      });
    } else {
      this.stop();
    }
  }

  setMinutes = val => this.setState({
    minutes: val
  })

  setSeconds = val => this.setState({
    seconds: val
  })

  render() {
    const {active, minutes, seconds} = this.state;
    console.log(this.state);
    let {className, fontClass = '', start, stop} = this.props;
    fontClass = `col fw-bold ${fontClass}`.trimEnd();
    return (
      <div className={className + " txt-center"} style={style}>
        <div className="row">
          <ScrollPicker className={fontClass} data={data}
            disabled={active} onChange={this.setMinutes} value={minutes} />
          <span className={`w-2 flex-grow-0 mx-2 ${fontClass}`}>:</span>
          <ScrollPicker className={fontClass} data={data}
            disabled={active} onChange={this.setSeconds} value={seconds} />
        </div>
        {active ? (
          <Button className="mt-2" onClick={this.stop}>{stop}</Button>
        ) : (
          <Button className="mt-2" onClick={this.start}>{start}</Button>
        )}
      </div>
    );
  }
}

Timer.defaultProps = {
  minutes: 0,
  seconds: 0,
};

const TimeSelect = ({...rest}) => {
  return <ScrollPicker {...rest} data={data}  />
}

export default Timer;
