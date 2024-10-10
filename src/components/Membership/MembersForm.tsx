import { Input, Label, MultiSelect } from '@Components/common/FormUI';
import Icon from '@Components/common/Icon';
import { Button } from '@Components/RadixComponents/Button';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MembersForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  return (
    <div className="flex h-full w-full flex-col items-center   rounded-2xl bg-white  ">
      <div className="flex w-full flex-col   px-10 py-10">
        <h2 className="text-xl md:text-2xl">Add Members</h2>
        <span className="text-md text-gray-400">Enter member details!</span>
      </div>
      <div className="flex h-full w-full flex-col gap-4 px-10">
        <div className="flex w-full gap-2">
          <div className="w-full">
            <Label>
              First Name<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border"
              placeholder="Prajwal"
            />
          </div>
          <div className="w-full">
            <Label>
              Last Name<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="w-full">
            <Label>
              Age<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
          <div className="w-full">
            <Label>
              Contact<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
        </div>
        <div className="">
          <span>Gender</span>
          <span className="text-lg text-blue-700">*</span>
          <div className=" flex w-full justify-between ">
            <div className="flex w-full gap-6">
              <div className="flex h-full items-center justify-center gap-2">
                <Input type="radio" />
                <Label>Male</Label>
              </div>
              <div className="flex h-full items-center justify-center gap-2">
                <Input type="radio" />
                <Label>Female</Label>
              </div>
            </div>
            <div className="flex h-full items-center justify-center gap-2">
              <Label>Others</Label>
              <Input type="text" />
            </div>
          </div>
        </div>
        <div className=" relative flex  w-full gap-4 ">
          <div className="relative z-50 flex w-full flex-col  gap-1">
            <Label htmlFor="Join Date">
              Membership Start Date
              <span className="text-lg text-blue-700">*</span>
            </Label>
            <span className="pointer-events-none absolute left-2 top-3 z-10 flex h-full items-center">
              <Icon name="calendar_month" className="text-gray-500" />
            </span>
            <div className="relative flex w-full items-center justify-center">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className=" flex h-[2.75rem] w-full rounded-lg border border-gray-300 bg-white pl-10 
      outline-1 outline-blue-500 focus:border-none focus:outline focus:outline-1 focus:outline-offset-0 "
                placeholderText="Select Date"
                popperPlacement="bottom-start"
                popperClassName="z-50"
                calendarIconClassName="pt-10"
              />
            </div>
          </div>
          <div className="w-full">
            <Label>
              Membership Duration
              <span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="In Months"
            />
          </div>
        </div>
        <div className="relative flex w-full flex-col  items-start justify-start gap-1 ">
          <Label htmlFor="Upload Photo">
            Upload Photo <span className="text-lg text-blue-700">*</span>
          </Label>
          <Input
            type="file"
            // accept="image/*"
            // onChange={handleFileChange}
            className=" mb-2 w-full rounded-md border pt-2"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label>
            Level<span className="text-lg text-blue-700">*</span>
          </Label>
          <MultiSelect
            options={[
              {
                label: 'Beginner',
                value: 'Beginner',
              },
              {
                label: 'Intermediate',
                value: 'Intermediate',
              },
              {
                label: 'Advanced',
                value: 'Advanced',
              },
              {
                label: 'Professional',
                value: 'Professional',
              },
            ]}
            className=" rounded-lg "
          />
        </div>

        <div className="mt-4 flex h-full w-full  justify-end gap-4 ">
          <Button className="danger h-[2.8rem] w-full bg-rose-600 hover:bg-rose-700">
            Clear Form
          </Button>
          <Button className="h-[2.8rem] w-full hover:bg-blue-700">
            Add Member
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MembersForm;
