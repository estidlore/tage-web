import {createRef, PureComponent} from "react";

class List extends PureComponent {
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

  scroll = y => {
    this.ref.current.scroll({
      top: y,
    });
  }

  render() {
    const {
      className = '',
      data,
      disabled,
      footer,
      header,
      onScrollEnd,
      renderItem,
      ...rest
    } = this.props;
    return (
      <div {...rest} ref={this.ref}
        className={`scroll ${disabled ? 'disabled' : ''} ${className}`.trimEnd()}
        onScroll={this.onScroll}>
        {header}
        {data.map(renderItem)}
        {footer}
      </div>
    );
  }
}

export default List;
