import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface ISectionTitleProps {
  text?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ text }) => {
  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
      <h2>{text}</h2>
    </ScrollAnimation>
  );
};

export default SectionTitle;
