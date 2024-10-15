import { Input, Label } from '@Components/common/FormUI';
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
    <div className="flex h-full w-full flex-col items-center rounded-2xl bg-[#f2f2f2]">
      <div className="flex w-full flex-col px-10 py-10">
        <h2 className="text-xl md:text-2xl">Subscription Package</h2>
        <span className="text-md text-gray-400">Enter package details!</span>
      </div>
      <div className="flex h-full w-full flex-col gap-4 px-10">
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

        <div className="mt-4 flex h-full w-full justify-end gap-4">
          <Button className="danger h-[2.8rem] w-full bg-rose-600 hover:bg-rose-700">
            Clear Form
          </Button>
          <Button className="h-[2.8rem] w-full hover:bg-blue-700">
            Add Subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;
