import MembersForm from '@Components/Membership/MembersForm';
import MembersTable from '@Components/Membership/MembersTable';
import React from 'react';

function Membership() {
  return (
    <div className="grid h-full w-full grid-cols-[60%_40%] gap-4 p-8">
      <MembersTable />
      <MembersForm />
    </div>
  );
}

export default Membership;
