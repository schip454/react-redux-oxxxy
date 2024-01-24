/* eslint-disable react/prop-types */
const Icon = ({ name, width, height }) => (
  <svg className={`icon icon-${name}`} style={{ width, height }}>
    <use xlinkHref={`/sprite.svg#${name}`}></use>
  </svg>
);

export default Icon;
