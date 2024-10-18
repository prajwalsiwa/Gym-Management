import { Button } from '@Components/RadixComponents/Button';
import React from 'react';

interface NotificationItemProps {
  message: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ message }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full flex-col gap-1 ">
        <h6 className="w-full text-sm font-semibold">Prajwal Siwa</h6>
        <div className="flex h-full  w-full items-center justify-between">
          <div className="flex h-full w-full ">
            <div className="flex h-8 w-9 items-center justify-center rounded-full bg-orange-700 text-sm text-white">
              PS
            </div>
            <li className="w-full border-b border-gray-200 p-2 text-sm text-gray-700">
              {message}
            </li>
          </div>
          <Button className="h-7 bg-teal-500">Send</Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
