import { FC } from 'react';

interface IIconProps {
  name: string;
  width?: number;
  height?: number;
}

const Icon: FC<IIconProps> = ({ name, width, height }) => (
  <svg className={`icon icon-${name}`} style={{ width, height }}>
    <use xlinkHref={`/sprite.svg#${name}`}></use>
  </svg>
);

export default Icon;
