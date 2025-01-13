// import SearchInput from '@Components/common/FormUI/SearchInput';
// import Navigation from '@Components/Navigation';
import { Button } from '@Components/RadixComponents/Button';
import SubscriptionTable from '@Components/Subscription/Table/SubscriptionTable';
// import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Subscription() {
  // const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  // const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(event.target.value);
  // };
  return (
    <div className="flex w-full  flex-col  gap-4">
      <div className="flex h-full w-full flex-col items-center   gap-4  px-10">
        <div className="flex h-10 w-full items-center border">
          Breadcrumb section
        </div>
        <div className="flex w-full flex-col justify-between gap-4">
          <div className=" flex h-full w-full items-center justify-between    ">
            <h4>Package List</h4>
            <div className="add-section flex  justify-end gap-4">
              <Button
                className="h-10 w-40 border border-teal-600  bg-white tracking-wide  text-teal-600 hover:bg-teal-100"
                iconClassname="!text-icon-md !font_semibold"
                leftIcon="download"
              >
                Download
              </Button>
              <Button
                className="h-10 w-40 bg-teal-500 hover:bg-teal-600"
                iconClassname="!text-icon-md !font_semibold"
                leftIcon="add"
                onClick={() => navigate('/add-package')}
              >
                Add New
              </Button>
            </div>
          </div>
        </div>
        <SubscriptionTable />
      </div>
    </div>
  );
}

export default Subscription;
