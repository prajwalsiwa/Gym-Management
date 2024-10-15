import { Input, Label } from '@Components/common/FormUI';
import { Button } from '@Components/RadixComponents/Button';
import 'react-datepicker/dist/react-datepicker.css';

function SubscriptionForm() {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-2xl   bg-[#f2f2f2]  ">
      <div className="flex w-full flex-col   px-10 py-10">
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
              className="w-full  rounded-lg border"
              placeholder="Prajwal"
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
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
          <div className="w-full">
            <Label>
              Discount<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="w-full">
            <Label>
              Vat %<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
            />
          </div>
          <div className="w-full">
            <Label>
              Total Price<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="number"
              className="w-full  rounded-lg border"
              placeholder="Siwa"
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
        <div className="description">description</div>

        <div className="mt-4 flex h-full w-full  justify-end gap-4 ">
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
