// import GeneralInfo from '@Components/AccountSettings/GeneralInfo';
import GeneralInfoForm from '@Components/AccountSettings/GeneralInfo/Form/GeneralInfoForm';
import Navigation from '@Components/Navigation';

function Settings() {
  return (
    <div className="h-full w-full ">
      <Navigation headerName="settings" />
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#f2f2f2] p-6">
        <GeneralInfoForm />
      </div>
    </div>
  );
}

export default Settings;
