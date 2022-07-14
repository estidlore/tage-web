import {Component} from 'react';
import {clss} from '../util/funcs';
import Button from './Button';
import ScrollPicker from './ScrollPicker';

const data = [];
for (let i = 0; i < 60; i++) {
  data.push({
    num: i,
  });
}

const style = {
  width: "250px",
};

const renderItem = ({num}) => (
  <>{num}</>
);

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
    minutes: val.num
  })

  setSeconds = val => this.setState({
    seconds: val.num
  })

  render() {
    const {active, minutes, seconds} = this.state;
    let {className, fontClass, start, stop} = this.props;
    fontClass = clss(`col fw-bold ${fontClass}`);
    return (
      <div className={`txt-center w ${className}`} style={style}>
        <div className="row">
          <ScrollPicker className={fontClass} data={data}
            disabled={active} onChange={this.setMinutes}
            renderItem={renderItem} value={minutes} />
          <span className={`w2 flex-grow-0 mx2 ${fontClass}`}>:</span>
          <ScrollPicker className={fontClass} data={data}
            disabled={active} onChange={this.setSeconds}
            renderItem={renderItem} value={seconds} />
        </div>
        {active ? (
          <Button className="mt2" onClick={this.stop}>{stop}</Button>
        ) : (
          <Button className="mt2" onClick={this.start}>{start}</Button>
        )}
      </div>
    );
  }
}

Timer.defaultProps = {
  className: '',
  fontClass: '',
  minutes: 0,
  seconds: 0,
};

export default Timer;
