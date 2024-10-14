import MembersTable from '../MembersTable/MembersTable';
import MembersForm from './Form/MembersForm';

function AddMember() {
  return (
    <div className=" grid h-full w-full  grid-cols-[36.5%_62.5%] gap-4  pl-8 pr-12">
      <div className="">
        <MembersForm />
      </div>
      <div className="">
        <MembersTable />
      </div>
    </div>
  );
}

export default AddMember;
