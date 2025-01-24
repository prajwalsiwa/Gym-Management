import { Button } from '@Components/RadixComponents/Button';
import React from 'react';

function MobileLink() {
  return (
    <div className=" flex h-full  w-full flex-col justify-between  gap-12 rounded-lg border bg-grey-700 p-4">
      <div className="flex flex-col gap-2">
        <span className="flex-wrap text-2xl leading-7 text-white ">
          Download Mobile App
        </span>
        <span className="text-sm text-white sm:text-base md:text-lg">
          Manage the business whenever and wherever you are
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button className="w-full bg-white text-black hover:bg-grey-200">
          Download Now
        </Button>
        <span className="text-white">Not available right now</span>
      </div>
    </div>
  );
}

export default MobileLink;
