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
    <div className=" flex min-h-[calc(100vh-10rem)] flex-col gap-6   p-2">
      {/* Top Section */}
      <div className="flex h-[15rem] w-full gap-3 overflow-hidden ">
        {/* Membership Section */}
        <div className="col-span-12 rounded-lg bg-white shadow-md dark:bg-grey-900 lg:col-span-3">
          <Membership />
        </div>

        {/* Cards Section */}
        <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
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
        <div className="xxxl:border xxxl:border-red-800 flex flex-grow rounded-lg border border-grey-200 bg-white p-3 pb-8 shadow-md dark:border dark:border-white dark:bg-grey-900 lg:col-span-3">
          <RevenueChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-3 lg:flex-row">
        {/* Gym Classes Section */}
        <div className="h-full flex-1 rounded-lg  dark:bg-grey-900">
          <GymClass />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-3">
          {/* Trainers and Donut Chart Section */}
          <div className="flex gap-6 ">
            {/* Trainers */}
            <div className="  grid h-[23vh] grid-cols-2 gap-4 overflow-hidden  ">
              <TrainerCard />
              <TrainerCard />
            </div>

            {/* Donut Chart */}
            <div className=" flex h-[23vh] w-[25rem]  flex-col  items-center  justify-center rounded-lg border bg-white p-6 py-10 shadow-md dark:border dark:border-white dark:bg-grey-900 lg:col-span-4">
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
          <div className="h-[23.8vh] rounded-lg bg-white shadow-md dark:bg-grey-900">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
