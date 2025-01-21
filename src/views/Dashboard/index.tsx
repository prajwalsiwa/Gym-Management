import ChartHeader from '@Components/common/Charts/ChartHeader';
import Card from '@Components/DashBoard/Card';
import RevenueChart from '@Components/DashBoard/RevenueChart';
import { Button } from '@Components/RadixComponents/Button';
import { useRef } from 'react';

import CustomDonutChart from '@Components/common/Charts/DonutChart';

const cardData = [
  {
    id: 1,
    icon: 'timeline',
    title: 'Revenue',
    count: '$4345k',
    subtitle: 'Month/July',
  },
  {
    id: 2,
    icon: 'people',
    title: 'Members',
    count: '83',
    subtitle: 'Active Members',
  },
  {
    id: 3,
    icon: 'alarm_add',
    title: 'Visited',
    count: '3',
    subtitle: 'Daily',
  },
  {
    id: 4,
    icon: 'fitness_center',
    title: 'Trainers',
    count: '5',
    subtitle: 'Available',
  },
];

const data = [
  { name: 'Outdoor', value: 50 },
  { name: 'Indoor', value: 30 },
];

export default function Dashboard() {
  const ref = useRef();
  const isDark = document.body.classList.contains('dark');

  return (
    <div className="flex h-full w-full flex-col  items-center gap-6 ">
      <div className="flex h-fit w-full  gap-6">
        <div className=" flex w-[25%] flex-col justify-between rounded-lg border p-4">
          <div className="flex flex-col gap-2">
            <span className="flex-wrap text-2xl leading-7 ">
              Manage your Fitness business
            </span>
            <span className="text-sm sm:text-base md:text-lg">
              6 Aug 2024, 7:20am
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Button leftIcon="add" className="w-full">
              New Member
            </Button>
            <Button variant="outline" className="w-full">
              Manage Class
            </Button>
          </div>
        </div>
        <div className="grid w-[30%] grid-cols-2 gap-4 ">
          {cardData.map(card => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              count={card.count}
              subtitle={card.subtitle}
            />
          ))}
        </div>
        <div className="w-[45%] rounded-lg border p-2">
          <RevenueChart />
        </div>
      </div>
      <div className="flex h-fit w-[30rem] flex-col items-center justify-center rounded-lg border p-4 ">
        <ChartHeader chartTitle="Gym Capacity" downloadComponentRef={ref} />
        <CustomDonutChart
          data={data}
          fills={isDark ? ['#e5e7eb', '#d1d5db'] : ['#1f2937', '#374151']}
        />
      </div>
    </div>
  );
}
