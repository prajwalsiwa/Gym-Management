/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from 'react';
import RoundedContainer from '@Components/common/RoundedContainer';
import Icon from '@Components/common/Icon';

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
    <div className="h-full w-full">
      <RoundedContainer className="flex h-full w-full flex-col gap-8 border bg-white p-6">
        <h4 className="">General Info</h4>
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
      </RoundedContainer>
    </div>
  );
}

export default GeneralInfoForm;
