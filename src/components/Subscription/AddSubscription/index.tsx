import SubscriptionForm from '../Form/SubscriptionForm';
import SubscriptionTable from '../Table/SubscriptionTable';

function AddSubscription() {
  return (
    <div className="flex w-full flex-col gap-4 px-12 py-8">
      <div className="flex h-10 w-full items-center border">
        Breadcrumb section
      </div>
      <div className=" grid h-full w-full grid-cols-[36.5%_62.5%]   gap-4 ">
        <SubscriptionForm />
        <SubscriptionTable />
      </div>
    </div>
  );
}

export default AddSubscription;
