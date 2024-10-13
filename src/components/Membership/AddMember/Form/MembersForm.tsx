import { Input, Label, MultiSelect } from '@Components/common/FormUI';
import RoundedContainer from '@Components/common/RoundedContainer';
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
    <RoundedContainer className="relative  z-10 flex h-full     w-full flex-col items-center border-none  bg-white px-6">
      <div className="flex w-full flex-col  px-4  py-4 ">
        <h2 className="text-xl md:text-2xl">Add Members</h2>
        <span className="text-md text-gray-400">Enter member details!</span>
      </div>
      <div className="scrollbar flex h-[calc(100vh-25rem)] w-full flex-col gap-4  overflow-y-auto px-4">
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
              <div className="flex   items-center justify-center gap-2">
                <Input type="radio" />
                <Label>Male</Label>
              </div>
              <div className="flex   items-center justify-center gap-2">
                <Input type="radio" />
                <Label>Female</Label>
              </div>
            </div>
            <div className="flex   items-center justify-center gap-2">
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

            <div className="relative flex w-full items-center justify-center">
              <DatePicker
                showIcon
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className=" flex h-[2.75rem] w-full rounded-lg border border-gray-300 bg-white 
      outline-1 outline-blue-500 focus:border-none focus:outline focus:outline-1 focus:outline-offset-0 "
                placeholderText="Select Date"
                popperPlacement="bottom-start"
                popperClassName="z-50"
                calendarIconClassName="mt-1.5 text"
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
        <div className="flex w-full flex-col gap-1">
          <Label>
            Level<span className="text-lg text-blue-700">*</span>
          </Label>
          <MultiSelect
            className="z-50"
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
          />
        </div>

        {/* <div>
          <DatePicker />
        </div> */}
        <div className="relative flex w-full flex-col  items-start justify-start gap-1 ">
          <Label htmlFor="Upload Photo">
            Upload Photo <span className="text-lg text-blue-700">*</span>
          </Label>
          <Input type="file" className=" mb-2 w-full rounded-md border pt-2" />
        </div>
      </div>
      <div className="mt-4 flex w-full   justify-end  gap-4 px-4 ">
        <Button className="danger h-[2.8rem] w-full bg-rose-600 hover:bg-rose-700">
          Clear Form
        </Button>
        <Button className="h-[2.8rem] w-full hover:bg-blue-700">
          Add Member
        </Button>
      </div>
    </RoundedContainer>
  );
}

export default MembersForm;