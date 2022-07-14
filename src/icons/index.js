import IcoOk from "./IcoOk";

const icons = {
 'ok': IcoOk,
};

export {
  IcoOk,
};

const Ico = ({icon}) => {
  const Icon = icons[icon];
  return (
    <Icon />
  );
}

export default Ico;
