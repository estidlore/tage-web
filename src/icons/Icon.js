const mapPath = (path, i) => (
  <path key={i} d={path} fill="currentColor" />
);

const Icon = ({className = '', paths, size = 512, ...rest}) => (
  <svg
    className={`icon ${className}`}
    width={size}
    height={size}
    version="1.1"
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {
      paths.map(mapPath)
    }
  </svg>
);

export default Icon;
