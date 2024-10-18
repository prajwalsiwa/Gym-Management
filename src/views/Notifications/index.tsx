import { useState } from 'react';
import Icon from '@Components/common/Icon';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover';
import NotificationItem from '@Components/Notifications/NotificationItem';

const notifications = [
  { id: 1, message: 'Expires in 2 days' },
  { id: 2, message: 'Expires in 1 week' },
  { id: 3, message: 'Expires in 2024/2/3' },
];

const Notifications: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild className="h-full">
        <button type="button" className="flex h-full items-center">
          <Icon
            // Dynamically set the icon name based on the open state
            name={isOpen ? 'notifications_active' : 'notifications'}
            className="cursor-pointer text-white"
            aria-label="Notifications"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="z-50 mt-2 w-96 rounded-lg border border-gray-300 bg-white shadow-lg"
        sideOffset={5} // Optional: Adjust spacing from trigger
      >
        <div className="flex h-full w-full flex-col gap-2 p-3">
          <div className="flex h-full w-full items-center justify-between">
            <h4>Notifications</h4>
            <Icon
              name="close"
              className="rounded-lg border p-1 !text-[1.25rem] hover:bg-slate-200"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="max-h-60 w-full overflow-y-auto">
            {notifications.length > 0 ? (
              <ul className="space-y-2 ">
                {notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    message={notification.message}
                  />
                ))}
              </ul>
            ) : (
              <p className="p-2 text-sm text-gray-500">No new notifications</p>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
