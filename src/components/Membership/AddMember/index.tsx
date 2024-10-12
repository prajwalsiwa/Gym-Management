import MembersTable from '../MembersTable/MembersTable';
import MembersForm from './Form/MembersForm';

function AddMember() {
  return (
    <div>
      <MembersForm />
      <MembersTable />
    </div>
  );
}

export default AddMember;
