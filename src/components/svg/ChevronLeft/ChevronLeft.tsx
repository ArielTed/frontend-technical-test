import { FC } from 'react';

interface ChevronLeftProps {
  fillColor?: string;
}

const ChevronLeft: FC<ChevronLeftProps> = ({ fillColor }) => {
  return (
    <svg width="16" height="16" fill={fillColor || '#000000'} viewBox="0 0 16 16">
      <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
  );
};

export default ChevronLeft;
