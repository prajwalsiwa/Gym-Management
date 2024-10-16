import SearchInput from '@Components/common/FormUI/SearchInput';
import MembersTable from '@Components/Membership/MembersTable/MembersTable';
import Navigation from '@Components/Navigation';
import { Button } from '@Components/RadixComponents/Button';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Membership() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex h-full  w-full  flex-col gap-16">
      <Navigation headerName="Membership" />
      <div className="  flex h-full w-full flex-col gap-8 rounded-2xl bg-[#f2f2f2] px-10  py-8">
        <div className="membership-header flex w-full items-center justify-between ">
          <div className="flex w-full items-end justify-center gap-4">
            <SearchInput
              className="h-10 w-52 rounded-lg bg-gray-100 px-4 "
              placeholder="Search"
              inputValue={searchValue}
              onChange={e => handleSearchChange(e)}
            />
          </div>
          <div className="add-section flex  justify-end gap-4">
            <Button
              className="h-10 w-40 bg-blue-500 tracking-wide hover:bg-blue-700"
              iconClassname="!text-icon-md !font_semibold"
              leftIcon="download"
            >
              Download
            </Button>
            <Button
              className="h-10 w-40 bg-blue-500 hover:bg-blue-700"
              iconClassname="!text-icon-md !font_semibold"
              leftIcon="add"
              onClick={() => navigate('/add-membership')}
            >
              Add New
            </Button>
          </div>
        </div>
        <MembersTable />
      </div>
    </div>
  );
}

export default Membership;
