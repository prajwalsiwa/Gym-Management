/* eslint-disable jsx-a11y/click-events-have-key-events */
import Icon from '../Icon';

interface ISortingContainerProps {
  title: string;
  className?: string;
  sortValue: 'desc' | 'asc' | '';
  handleSort?: any;
}

export default function SortingContainer({
  title,
  className,
  sortValue,
  handleSort,
}: ISortingContainerProps) {
  return (
    <div className="flex items-center justify-start gap-1">
      <div className="tooltip text-gray-500">
        <span className={`body-md ${className}`}>{title}</span>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-[2px]"
        role="button"
        tabIndex={0}
        onClick={handleSort}
      >
        <Icon
          name="expand_less"
          className={`${
            sortValue === 'asc' ? 'text-teal-500' : 'text-gray-500'
          }  !flex !h-2 !items-center !justify-start text-base font-bold`}
        />
        <hr />
        <Icon
          name="expand_more"
          className={`${
            sortValue === 'desc' ? 'text-teal-500' : 'text-gray-500'
          }  !flex  !h-2 !items-center !justify-end !text-base font-bold`}
        />
      </div>
    </div>
  );
}
