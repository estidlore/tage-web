import {Component, createRef} from "react";
import List from "./List";

class ScrollPicker extends Component {
  constructor(props) {
    super(props);
    const {itemHeight, value} = props;
    this.itemStyle = {height: itemHeight};
    this.refList = createRef();
    this.scrollStyle = {height: itemHeight * 3};
    this.state = {
      selection: 0,
    };
  }

  getItem = (item, index) => (
    <div key={this.props.getKey(item, index)} style={this.itemStyle}
      className="d-flex justify-center align-center">
      {this.props.renderItem(item, index)}
    </div>
  )

  onScrollEnd = e => this.scroll(e.target.scrollTop);

  scroll = offset => {
    const {data, itemHeight, onChange} = this.props;
    const i = Math.round(offset / itemHeight);
    const y = i * itemHeight;
    if (i !== this.state.selection) {
      this.setState({selection: i});
      onChange(data[i]);
      this.refList.current.scroll(y);
    }
    if (y !== offset) {
      this.refList.current.scroll(y);
    }
  }

  componentDidMount() {
    this.scroll(this.props.value * this.props.itemHeight);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      this.refList.current.scroll(nextProps.value * nextProps.itemHeight);
      return true;
    }
    return nextState.selection !== this.state.selection;
  }

  render() {
    const {className, data, disabled, style} = this.props;
    return (
      <div className={`pos-relative ${className}`.trimEnd()}
        style={style}>
        <List ref={this.refList}
          data={data}
          disabled={disabled}
          footer={<div style={this.itemStyle} />}
          header={<div style={this.itemStyle} />}
          onScrollEnd={this.onScrollEnd}
          renderItem={this.getItem}
          style={this.scrollStyle}
        />
        <div className="no-pointer-ev pos-absolute t-50 w-10 bord-t
            bord-b bord-2 bord-primary trans-mid-y" style={this.itemStyle} />
      </div>
    );
  }
}

ScrollPicker.defaultProps = {
  getKey: (_, index) => index,
  itemHeight: 40,
  renderItem: item => item,
  value: 0,
  className: '',
};

export default ScrollPicker;
