/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Button } from '@Components/RadixComponents/Button';

function GymClass() {
  const [activeClass, setActiveClass] = useState<string | null>(null);

  const gymClasses = [
    {
      id: 'yoga',
      name: 'Yoga',
    },
    {
      id: 'strength',
      name: 'Strength Training',
    },
    {
      id: 'cardio',
      name: 'Cardio Blast',
    },
  ];

  const handleSelectClass = (id: string) => {
    setActiveClass(id);
  };

  return (
    <div className="flex h-[48vh] w-[20rem] flex-col gap-2 rounded-lg border p-2 pb-4 shadow-lg">
      <h2 className="pl-3 text-xl font-bold  text-gray-800 dark:text-white xl:text-xl">
        Available Gym Classes
      </h2>
      <div className="scrollbar flex  min-h-[12rem] flex-col gap-2 overflow-auto px-2 ">
        {gymClasses.map(gymClass => (
          <div
            key={gymClass.id}
            className={`rounded-lg border p-4 transition dark:bg-grey-900  ${
              activeClass === gymClass.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-white'
            }`}
            onClick={() => handleSelectClass(gymClass.id)}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white ">
              {gymClass.name}
            </h3>
            <Button
              className={`mt-3 w-full hover:text-white ${
                activeClass === gymClass.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {activeClass === gymClass.id ? 'Selected' : 'Select Class'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymClass;
