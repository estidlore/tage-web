import {Component, createRef} from "react";
import {clss} from "../util/funcs";

class List extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.scrolling = false;
    this.scrollEndDelay = 50;
  }

  onScroll = e => {
    if (!this.scrolling) {
      this.onScrollBegin(e);
    }
    clearTimeout(this.timeScroll);
    this.timeScroll = setTimeout(
      this.onScrollEnd,
      this.scrollEndDelay,
      e
    );
  }

  onScrollBegin = e => {
    this.scrolling = true;
    this.props.onScrollBegin?.(e);
  }

  onScrollEnd = e => {
    this.scrolling = false;
    this.props.onScrollEnd?.(e);
  }

  scroll = y => this.ref.current.scroll({
    top: y,
  });

  renderItem = (el, i) => {
    const {renderItem: Item, getKey} = this.props;
    return (
      <Item key={getKey(el, i)} {...el} i={i} />
    );
  }

  render() {
    const {
      className = '',
      data,
      disabled,
      footer,
      getKey: _1,
      header,
      onScrollEnd,
      renderItem: _2,
      ...rest
    } = this.props;
    return (
      <div {...rest} ref={this.ref}
        className={clss(`list ${className}`, ['disabled', disabled])}
        onScroll={this.onScroll}>
        {header}
        {data.map(this.renderItem)}
        {footer}
      </div>
    );
  }
}

List.defaultProps = {
  disabled: false,
  footer: null,
  getKey: (el, i) => el.id ?? i,
  header: null,
  onScrollEnd: null,
  renderItem: item => <>{item}</>,
};

export default List;
