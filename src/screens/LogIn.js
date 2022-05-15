import {useContext, useState} from "react";
import {Button, Hr, Input, Modal} from "../components";
import SignUp from "./SignUp";
import userData from "../data/user.json";

import {AppContext} from "../App";

const style = {width: "400px"};

const LogIn = () => {
  const {setStApp} = useContext(AppContext);
  const stSignUpShow = useState(false);
  const stAlertShow = useState(false);
  const showSignUp = () => stSignUpShow[1](true);
  const data = {
    name: "",
    pass: "",
  };
  const setData = e => data[e.target.name] = e.target.value;
  const onSubmit = () => {
    if (data.name !== userData.name || data.pass !== userData.pass) {
      stAlertShow[1](true);
      return;
    }
    setStApp({signed: true});
  };
  return (
    <div className="mx mw-5 px-1 mt-5 pt-5 txt-center" style={style}>
      <h1 className="mb-3">Log In</h1>
      <Input name="name" onChange={setData} placeholder="Username" />
      <Input name="pass" onChange={setData}
        placeholder="Password" type="password" />
      <Button className="w-10" onClick={onSubmit}>Log In</Button>
      <Hr />
      <Button className="w-10" onClick={showSignUp}>New account</Button>
      <Modal title="Sign Up" stShow={stSignUpShow}>
        <SignUp />
      </Modal>
      <Modal title="Alert" stShow={stAlertShow}>
        <p>Wrong username or password</p>
      </Modal>
    </div>
  );
};

export default LogIn;
