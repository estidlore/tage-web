const Button = ({onClick, ...rest}) => (
  <button {...rest} onClick={onClick} />
);

export default Button;