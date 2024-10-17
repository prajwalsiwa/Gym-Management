import GeneralInfo from '@Components/AccountSettings/GeneralInfo';
import Navigation from '@Components/Navigation';

function Settings() {
  return (
    <div className="h-full w-full ">
      <Navigation headerName="General Info" />
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#f2f2f2] p-6">
        <GeneralInfo />
      </div>
    </div>
  );
}

export default Settings;
