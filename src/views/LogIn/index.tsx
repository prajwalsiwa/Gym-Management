import LoginForm from '@Components/Login/LoginForm';
import React from 'react';

function LogIn() {
  return (
    <div className="grid h-full w-full lg:grid-cols-[55%_45%] ">
      <div className="flex h-full w-full items-center justify-center">
        <LoginForm />
      </div>
      <div className="flex h-full w-0 items-center justify-center bg-blue-700 lg:w-full ">
        <h1 className="font-bold text-white">HORIZON GYM</h1>
      </div>
    </div>
  );
}

export default LogIn;
