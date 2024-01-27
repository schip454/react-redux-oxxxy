import { FC } from 'react';

interface IPageTitleProps {
  text?: string;
}

const PageTitle: FC<IPageTitleProps> = ({ text }) => {
  return <h1 className="page-title">{text}</h1>;
};

export default PageTitle;
