import {useState} from "react";
import {Button, Hr, Input} from "../components";

const style = {width: '400px'};

const LogIn = ({setPanel}) => {
  const onSignUp = () => setPanel(1);
  return (
    <>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button className="">Log In</Button>
      <Hr />
      <Button className="" onClick={onSignUp}>New account</Button>
    </>
  );
};

const SignUp = ({setPanel}) => {
  const onLogIn = () => setPanel(0);
  const data = {
    username: '',
    password: '',
    password2: '',
  };
  const onChange = e => data[e.target.name] = e.target.value;
  const onSubmit = e => {
    e.preventDefault();
    // check if password contains at least one number
    if (!/\d/.test(data.password)) {
      alert('Password must contain at least one number');
      return;
    }
    // check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(data.password)) {
      alert('Password must contain at least one uppercase letter');
      return;
    }
    // check if password contains at least one lowercase letter
    if (!/[a-z]/.test(data.password)) {
      alert('Password must contain at least one lowercase letter');
      return;
    }
    // check if password contains at least one special character
    if (!/[!@#$%^&*]/.test(data.password)) {
      alert('Password must contain at least one special character');
      return;
    }
    // check if password contains at least 8 characters
    if (data.password.length < 8) {
      alert('Password must contain at least 8 characters');
      return;
    }
    // check if password and password2 match
    if (data.password !== data.password2) {
      alert('Passwords do not match');
      return;
    }
  };
  return (
    <>
      <Input name="username" onChange={onChange} value={data.username}
        placeholder="Username" />
      <Input name="password" onChange={onChange} value={data.password}
        type="password" placeholder="Password" />
      <Input name="password2" onChange={onChange} value={data.password2}
        type="password" placeholder="Repeat password" />
      <Button className="w-5" onClick={onSubmit}>Sign Up</Button>
      <Hr />
      <Button className="w-5" onClick={onLogIn}>I have an account</Button>
    </>
  );
};

const panels = [LogIn, SignUp];

const Auth = () => {
  const [panel, setPanel] = useState(0);
  return (
    <div className="mx-auto mw-5 px-1 mt-5 pt-5 txt-center" style={style}>
      <h1 className="txt-primary">TAGE</h1>
      {panels[panel]({setPanel: setPanel})}
    </div>
  );
};


export default Auth;
