import {clss} from "../util/funcs";
import Button from "./Button";

const Modal = ({children, title = "", stShow, ...rest}) => {
  const className = clss("modal", ["show", stShow[0]]);
  const onClose = () => stShow[1](false);
  return (
    <div {...rest} className={className}>
      <div className="panel round2">
        <div className="header">
          <h2>{title}</h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;