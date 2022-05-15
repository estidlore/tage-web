import Button from "./Button";

const Modal = ({children, title = '', stShow, ...rest}) => (
  <div {...rest} className={`modal ${stShow[0] ? 'show' : ''}`}>
    <div className="panel round-2">
      <div className="header">
        <h2>{title}</h2>
        <Button onClick={() => stShow[1](false)}>Close</Button>
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;