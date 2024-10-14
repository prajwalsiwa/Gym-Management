import { Label, Select } from '@Components/common/FormUI';
import SearchInput from '@Components/common/FormUI/SearchInput';
import MembersTable from '@Components/Membership/MembersTable/MembersTable';
import { Button } from '@Components/RadixComponents/Button';
import { useNavigate } from 'react-router-dom';

function Membership() {
  const navigate = useNavigate();

  return (
    <div className=" flex h-full w-full flex-col gap-8 px-10 py-8">
      <div className="membership-header flex w-full items-center justify-between ">
        <div className="flex justify-start">
          <h3>Membership</h3>
        </div>
        <div className="flex w-full  justify-center gap-4">
          <div className=" flex items-center justify-center gap-2">
            <Label>View By</Label>
            <Select
              className="!h-10 !w-52 rounded-lg bg-gray-100 px-4 !text-lg"
              options={[]}
            />
          </div>
          <SearchInput
            className="h-10 w-52 rounded-lg bg-gray-100 px-4 "
            inputValue="search"
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
  );
}

export default Membership;
