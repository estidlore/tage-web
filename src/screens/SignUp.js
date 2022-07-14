import {Button, Input} from "../components";

const SignUp = ({onSubmit}) => {
  const data = {
    name: '',
    pass1: '',
    pass2: '',
  };
  const setData = e => data[e.target.name] = e.target.value;
  return (
    <>
      <Input name="name" onChange={setData} placeholder="Username" />
      <Input name="pass1" onChange={setData}
        placeholder="Password" type="password" />
      <Input name="pass2" onChange={setData}
        placeholder="Repeat password" type="password" />
      <Button className="w10" onClick={onSubmit}>Sign Up</Button>
    </>
  );
}

export default SignUp;