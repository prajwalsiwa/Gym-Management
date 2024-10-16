import Navigation from '@Components/Navigation';
import SubscriptionTable from '@Components/Subscription/Table/SubscriptionTable';

function Subscription() {
  return (
    <div className="w-full">
      <Navigation headerName="Subscription Package" />
      <div className="grid h-full w-full  gap-4 p-8">
        <SubscriptionTable />
      </div>
    </div>
  );
}

export default Subscription;
