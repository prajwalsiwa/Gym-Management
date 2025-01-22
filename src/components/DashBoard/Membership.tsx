import { Button } from '@Components/RadixComponents/Button';
import React from 'react';

function Membership() {
  return (
    <div className=" flex h-full w-full  flex-col gap-12 rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        <span className="flex-wrap text-2xl leading-7 ">
          Manage your Fitness business
        </span>
        <span className="text-sm sm:text-base md:text-lg">
          6 Aug 2024, 7:20am
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Button leftIcon="add" className="w-full">
          New Member
        </Button>
        <Button variant="outline" className="w-full">
          Manage Member
        </Button>
      </div>
    </div>
  );
}

export default Membership;
