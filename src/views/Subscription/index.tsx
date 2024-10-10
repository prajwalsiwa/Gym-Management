import SubscriptionForm from '@Components/Subscription/SubscriptionForm';
import SubscriptionTable from '@Components/Subscription/SubscriptionTable';

function Subscription() {
  return (
    <div className="grid h-full w-full grid-cols-[60%_40%] gap-4 p-8">
      <SubscriptionTable />
      <SubscriptionForm />
    </div>
  );
}

export default Subscription;
