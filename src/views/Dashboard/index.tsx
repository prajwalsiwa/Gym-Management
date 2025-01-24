import ChartHeader from '@Components/common/Charts/ChartHeader';
import Card from '@Components/DashBoard/Card';
import RevenueChart from '@Components/DashBoard/RevenueChart';
import { useRef } from 'react';
import CustomDonutChart from '@Components/common/Charts/DonutChart';
import Membership from '@Components/DashBoard/Membership';
import TrainerCard from '@Components/DashBoard/TrainerCard';
import Categories from '@Components/DashBoard/Categories';
import GymClass from '@Components/DashBoard/GymClass';

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
  { id: 3, icon: 'alarm_add', title: 'Visited', count: '3', subtitle: 'Daily' },
  {
    id: 4,
    icon: 'fitness_center',
    title: 'Trainers',
    count: '5',
    subtitle: 'Available',
  },
];

const chartData = [
  { name: 'Outdoor', value: 50 },
  { name: 'Indoor', value: 30 },
];

export default function Dashboard() {
  const ref = useRef();
  const isDark = document.body.classList.contains('dark');

  return (
    <div className="scrollbar flex h-[calc(100vh-8rem)] flex-col gap-6 overflow-y-auto pr-2">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Membership Section */}
        <div className="col-span-12 rounded-lg bg-white p-3 shadow-md dark:bg-grey-900 lg:col-span-3">
          <Membership />
        </div>

        {/* Cards Section */}
        <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-4">
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

        {/* Revenue Chart Section */}
        <div className="col-span-12 rounded-lg border border-grey-200 bg-white p-4 shadow-md dark:border dark:border-white dark:bg-grey-900 lg:col-span-5">
          <RevenueChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-6">
        {/* Gym Classes Section */}
        <div className="w-[24%] rounded-lg bg-white  shadow-md dark:bg-grey-900">
          <GymClass />
        </div>

        {/* Main Content Section */}
        <div className="w-[75%] space-y-6">
          {/* Trainers and Donut Chart Section */}
          <div className="grid grid-cols-12 gap-6">
            {/* Trainers */}
            <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-8">
              <TrainerCard />
              <TrainerCard />
            </div>

            {/* Donut Chart */}
            <div className="col-span-12 flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:border dark:border-white dark:bg-grey-900 lg:col-span-4">
              <ChartHeader
                chartTitle="Gym Capacity"
                downloadComponentRef={ref}
              />
              <CustomDonutChart
                data={chartData}
                fills={isDark ? ['#e5e7eb', '#d1d5db'] : ['#1f2937', '#374151']}
              />
            </div>
          </div>

          {/* Categories Section */}
          <div className="rounded-lg bg-white  shadow-md dark:bg-grey-900">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
