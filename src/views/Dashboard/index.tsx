import Card from '@Components/DashBoard/Card';
import RevenueChart from '@Components/DashBoard/RevenueChart';
import { Button } from '@Components/RadixComponents/Button';

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

export default function Dashboard() {
  return (
    <div className="flex  h-full w-full ">
      <div className="flex h-fit w-full gap-6">
        {/* <Navbar /> */}
        <div className=" flex flex-col justify-between rounded-lg border p-4">
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
        <div className="grid grid-cols-2 gap-4 ">
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
        <div className="w-1/2 rounded-lg border p-2">
          <RevenueChart />
        </div>
      </div>
    </div>
  );
}
