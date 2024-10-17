import RoundedContainer from '@Components/common/RoundedContainer';
import { Button } from '@Components/RadixComponents/Button';
import gymlogo from '@Assets/images/gymlogo.png';
import { useNavigate } from 'react-router-dom';

// const gymInfo = {
//   id: 1,
//   gymName: 'FitLife Gym',
//   vatPanNumber: '123456789',
//   logo: 'base64_encoded_image_string',
//   fullAddress: '123 Main Street, Kathmandu, Nepal',
//   email: 'info@fitlifegym.com',
//   phoneNumber: '+977-1234567890',
// };

const GeneralInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-2xl  bg-white px-6 py-6">
      <h5>My Profile</h5>
      <div className="flex  h-full w-full flex-col gap-4 ">
        <RoundedContainer className="flex  h-fit w-full items-center justify-between px-6 py-6 ">
          <div className="flex h-full w-full items-center gap-4 ">
            <div className="h-20 w-20 overflow-hidden rounded-full border">
              <img
                src={gymlogo}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h5>Prajwal Gym</h5>
              <span className="text-md text-gray-700">Managing Director</span>
              <span className=" text-md text-gray-500">kapan, Faika 01</span>
            </div>
          </div>
          <div>
            <Button
              className="text flex gap-2 rounded-2xl border border-gray-400 bg-white font-medium text-gray-600"
              rightIcon="border_color"
              onClick={() => navigate('/general-settings')}
            >
              Edit
            </Button>
          </div>
        </RoundedContainer>
        <RoundedContainer className="flex h-fit w-full flex-col items-center justify-between px-6 py-6">
          <div className="header-section flex w-full flex-col items-start justify-between gap-2">
            <div className="header-section flex w-full items-start justify-between">
              <h5>Personal Information</h5>
              <div>
                <Button
                  className="text flex gap-2 rounded-2xl border border-gray-400 bg-white font-medium text-gray-600"
                  rightIcon="border_color"
                  onClick={() => navigate('/general-settings')}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="grid h-full w-full grid-cols-2 ">
              <div className="flex h-full w-full flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500">First Name </span>
                  <span className="font-semibold text-gray-700">
                    Prajwal Siwa
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">Email Address </span>
                  <span className="font-semibold text-gray-700">
                    prajwal123@gmail.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">VAT %</span>
                  <span className="font-semibold text-gray-700">10%</span>
                </div>
              </div>
              <div className="flex h-full w-full flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500">Last Name </span>
                  <span className="font-semibold text-gray-800">
                    Prajwal Siwa
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">Contact </span>
                  <span className="font-semibold text-gray-800">
                    1234567892
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer className="flex h-fit w-full flex-col items-center justify-between px-6 py-6">
          <div className="header-section flex w-full flex-col items-start justify-between gap-2">
            <div className="header-section flex w-full items-start justify-between">
              <h5>Address</h5>
              <div>
                <Button
                  className="text flex gap-2 rounded-2xl border border-gray-400 bg-white font-medium text-gray-600"
                  rightIcon="border_color"
                  onClick={() => navigate('/general-settings')}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="grid h-full w-full grid-cols-2 ">
              <div className="flex h-full w-full flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500">Country</span>
                  <span className="font-semibold text-gray-700">Nepal</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">PAN no. </span>
                  <span className="font-semibold text-gray-800">
                    1234567892
                  </span>
                </div>
              </div>
              <div className="flex h-full w-full flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500">State/City </span>
                  <span className="font-semibold text-gray-800">
                    Kathmandu, Kapan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RoundedContainer>
      </div>
    </div>
  );
};

export default GeneralInfo;
