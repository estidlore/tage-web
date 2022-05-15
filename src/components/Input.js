const Input = ({className = '', onChange, type = 'text', ...rest}) => (
  <input {...rest} className={`d-block w-10 my-1 ${className}`.trimEnd()}
    onChange={onChange} type={type} />
);

export default Input;
