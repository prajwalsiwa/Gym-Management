import React from 'react';
import Icon from '@Components/common/Icon';

interface CardProps {
  icon: string;
  title: string;
  count: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, title, count, subtitle }) => {
  return (
    <div className="flex  h-[7rem] w-[12rem] min-w-32 flex-col gap-4 rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <Icon name={icon} />
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold">{count}</span>
        <span className="text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
};

export default Card;
