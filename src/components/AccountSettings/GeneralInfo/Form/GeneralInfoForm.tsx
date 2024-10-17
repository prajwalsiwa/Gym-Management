/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from 'react';
import RoundedContainer from '@Components/common/RoundedContainer';
import Icon from '@Components/common/Icon';
import { Input, Label } from '@Components/common/FormUI';
import { Button } from '@Components/RadixComponents/Button';

function GeneralInfoForm() {
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file input change
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const logoURL = URL.createObjectURL(file);
      setLogo(logoURL);
    }
  };

  // Trigger file input click
  const handleLogoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-[#f2f2f2] p-4">
      Breadcrumb
      <RoundedContainer className="flex h-full w-full flex-col gap-8 border bg-white  p-6 py-10">
        <h4 className="">General Info</h4>
        <div className="scrollbar flex h-full w-full flex-col gap-4 overflow-y-auto px-2">
          <div className="flex flex-col items-center gap-4">
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleLogoChange}
              className="hidden"
            />
            {/* Logo upload section acting as input */}
            <div
              className="flex h-44 w-full cursor-pointer items-center justify-center rounded-lg  border border-dashed border-gray-600"
              onClick={handleLogoClick}
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Uploaded Logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 ">
                  <Icon
                    name="image"
                    className=" !text-[4rem] !font-normal text-[#2985EB]"
                  />
                  <span className="mt-4 block text-black">
                    Please upload your logo (SVG,JPG and PNG)
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <Label>
              Gym Full Name<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border bg-white"
              placeholder="Prajwal's Gym"
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <Label>
                First Name<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="Prajwal"
              />
            </div>
            <div className="w-full">
              <Label>
                Last Name<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="Siwa"
              />
            </div>
          </div>
          <div>
            <Label>
              Position<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border bg-white"
              placeholder="Managing Director"
            />
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full">
              <Label>
                Phone<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="980606060"
              />
            </div>
            <div className="w-full">
              <Label>
                Email<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="Kathmandu,kapan"
              />
            </div>
          </div>
          <div>
            <Label>
              Address<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border bg-white"
              placeholder="Kathmandu,kapan,Nepal"
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="w-full">
              <Label>
                VAT %<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="10"
              />
            </div>
            <div className="w-full">
              <Label>
                Pan no.<span className="text-lg text-blue-700">*</span>
              </Label>
              <Input
                type="text"
                className="w-full  rounded-lg border bg-white"
                placeholder="124568"
              />
            </div>
          </div>
          <div>
            <Label>
              Slogan<span className="text-lg text-blue-700">*</span>
            </Label>
            <Input
              type="text"
              className="w-full  rounded-lg border bg-white"
              placeholder="Building strong minds and bodies."
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center  gap-4">
          <Button leftIcon="close" className="w-36 bg-rose-500">
            Cancel
          </Button>
          <Button leftIcon="save" className="w-fit bg-blue-700 px-6">
            Update Form
          </Button>
        </div>
      </RoundedContainer>
    </div>
  );
}

export default GeneralInfoForm;
