import { Input, Label, Select } from '@Components/common/FormUI';
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
    <div className="flex h-full w-full flex-col gap-2 ">
      <div className="flex w-full flex-col justify-between   ">
        <div>
          <h2 className="text-xl md:text-2xl">Add Members</h2>
          <span className="text-md text-gray-400">Enter member details!</span>
        </div>
      </div>
      <RoundedContainer className="relative z-10 flex  w-full flex-col justify-between border    bg-[#F2F2F2]  pt-6  ">
        <div className="scrollbar  flex w-full flex-col gap-4 overflow-y-auto   px-4 lg:h-[calc(100vh-15rem)] 2xl:h-[57vh]">
          <div className="flex w-full flex-wrap gap-2  xl:flex-nowrap">
            <div className="w-full">
              <Label>
                First Name<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="text-md w-full rounded-lg border bg-white"
                placeholder="Prajwal"
              />
            </div>
            <div className="w-full ">
              <Label>
                Last Name<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="text-md w-full  rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-2 xl:flex-nowrap">
            <div className="w-full">
              <Label>
                Age<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full  rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
            <div className="w-full">
              <Label>
                Contact<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full  rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
          </div>
          <div className=" relative flex w-full flex-wrap items-end  gap-2 xl:flex-nowrap    ">
            <div className="flex w-full flex-col ">
              <Label>
                Membership Start Date
                <span className="text-lg text-blue-700">*</span>
              </Label>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={handleDateChange}
                placeholderText="Select Date"
                dateFormat="yyyy/MM/dd"
                calendarIconClassName="mt-1"
                className="z-40 h-11 w-full rounded-lg    border border-gray-300 outline-blue-500 focus:outline focus:outline-offset-0"
              />
            </div>
            <div className="w-full">
              <Label>
                Membership Expiry Date
                <span className=" text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full rounded-lg  border bg-white"
                placeholder="In Months"
              />
            </div>
          </div>
          <div>
            <Label>
              Select package<span className="text-lg text-blue-700">*</span>
            </Label>
            <Select
              options={[
                {
                  label: 'Strength Training',
                  value: 'option1',
                },
                {
                  label: 'Cardio and Fitness',
                  value: 'option2',
                },
                {
                  label: 'Muscle Gain Program',
                  value: 'option3',
                },
                {
                  label: 'Full Body Conditioning',
                  value: 'option4',
                },
                {
                  label: 'Weight Loss Package',
                  value: 'option5',
                },
              ]}
              placeholder="Select package"
              className=" rounded-lg bg-white "
            />
          </div>
          <div className="">
            <span>Gender</span>
            <span className="text-lg text-blue-700">*</span>
            <div className=" flex w-full flex-wrap justify-between 2xl:flex-nowrap ">
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

          {/* <div>
          <DatePicker />
        </div> */}
          <div className="relative flex w-full flex-col  items-start justify-start gap-1 ">
            <Label htmlFor="Upload Photo">
              Upload Photo <span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="file"
              className=" mb-2 w-full rounded-md border bg-white pt-2"
            />
          </div>
        </div>
        <div className="flex h-20 items-center       gap-4 bg-[#f2f2f2] px-4 ">
          <Button className="danger h-[2.8rem] w-full bg-teal-500 hover:bg-teal-700">
            Clear Form
          </Button>
          <Button className="h-[2.8rem] w-full hover:bg-blue-700">
            Add Member
          </Button>
        </div>
      </RoundedContainer>
    </div>
  );
}

export default MembersForm;
