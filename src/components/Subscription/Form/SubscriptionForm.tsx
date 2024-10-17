import { Input, Label } from '@Components/common/FormUI';
import RoundedContainer from '@Components/common/RoundedContainer';
import { Button } from '@Components/RadixComponents/Button';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for the editor

function SubscriptionForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [description, setDescription] = useState(''); // State to handle the description

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-2 ">
      <div className="flex w-full flex-col">
        <h2 className="text-xl md:text-2xl">Subscription Package</h2>
        <span className="text-md text-gray-400">Enter package details!</span>
      </div>
      <RoundedContainer className="relative z-10 flex w-full  flex-col justify-between  gap-10  border  bg-[#F2F2F2]    px-4  pt-6 ">
        <div className="scrollbar  flex w-full flex-col gap-4 overflow-y-auto   px-2  lg:h-[calc(100vh-15rem)] 2xl:h-fit ">
          <div className="flex w-full gap-2">
            <div className="w-full">
              <Label>
                Package Name<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full rounded-lg border bg-white"
                placeholder="Prajwal"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col">
              <Label>
                Membership Duration
                <span className="text-lg text-blue-700">*</span>
              </Label>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={handleDateChange}
                placeholderText="Select Date"
                dateFormat="yyyy/MM/dd"
                calendarIconClassName="mt-1"
                className="h-10 w-full rounded-lg   border border-gray-300 outline-blue-500 focus:outline focus:outline-offset-0"
              />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full">
              <Label>
                Package Price<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
            <div className="w-full">
              <Label>
                Discount<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-full">
              <Label>
                Total Price<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="number"
                className="w-full rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label>
              Description<span className="text-lg text-blue-700">*</span>
            </Label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              theme="snow" // Using the 'snow' theme for a clean appearance
              className="scrollbar h-40 max-h-40 w-full overflow-hidden rounded-lg  border  bg-white"
            />
          </div>
        </div>
        <div className=" flex h-20 w-full justify-end gap-4 px-2">
          <Button className="danger h-[2.8rem] w-full bg-teal-500 hover:bg-teal-700">
            Clear Form
          </Button>
          <Button className="h-[2.8rem] w-full hover:bg-blue-700">
            Add Subscription
          </Button>
        </div>
      </RoundedContainer>
    </div>
  );
}

export default SubscriptionForm;
