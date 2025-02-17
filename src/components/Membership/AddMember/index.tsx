import MembersTable from '../MembersTable/MembersTable';
import MembersForm from './Form/MembersForm';

function AddMember() {
  return (
    <div className="flex w-full flex-col gap-4  ">
      {/* <div className="flex h-10 w-full items-center border">
        Breadcrumb section
      </div> */}
      <div className=" grid h-full w-full grid-cols-[36.5%_62.5%]   gap-4 ">
        <MembersForm />
        <MembersTable />
      </div>
    </div>
  );
}

export default AddMember;
