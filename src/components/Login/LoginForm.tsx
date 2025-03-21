import Icon from '@Components/common/Icon';
import { Button } from '@Components/RadixComponents/Button';
import { Input, Label } from '@Components/common/FormUI';
import useLogin from '@Services/authApi';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  username: string;
  password: string;
}

function LoginForm() {
  const { mutate: login, isLoading, isError, isSuccess } = useLogin();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } =
    useForm<LoginFormValues>();
  const [isVisible, setIsVisible] = useState(false);
  const fields = watch(['username', 'password']);

  const toggleVisibility = () => {
    setIsVisible((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  });

  const handleAutofill = () => {
    setValue('username', 'emilys');
    setValue('password', 'emilyspass');
  };

  const onSubmit = (data: LoginFormValues) => {
    login({
      password: data.password,
      username: data.username,
    });
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center  ">
      <div className="flex h-[85vh] flex-col items-center  justify-center gap-4 overflow-hidden pt-10 sm:w-[28rem]">
        <div className="flex h-fit w-full  sm:w-[28rem] md:w-[28rem]">
          <Icon
            className="!text-sm !font-bold text-gray-400"
            name="arrow_back_ios"
          />
          <span className="text-md text-gray-400">Back to Dashboard</span>
        </div>
        <div className="flex h-full w-fit flex-col gap-8 pt-4 sm:w-[28rem]">
          <div>
            <h2 className="text-xl md:text-2xl">Sign In</h2>
            <span className="text-md text-gray-400">
              Enter your username and password to sign in!
            </span>
          </div>
          {/* <Button className="flex h-12 w-full items-center gap-2 bg-gray-200 text-lg font-normal text-black">
            <img className="h-4 w-4" src={googleIcon} alt="" />
            <span className="text-md leading-10 tracking-wider">
              Sign in with Google
            </span>
          </Button> */}
          {/* <div className=" flex w-full items-center justify-center">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-lg text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div> */}
          <form
            className="flex w-full flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input-section flex w-full flex-col gap-2">
              <div className="flex w-full flex-col justify-between gap-2  ">
                <Label className="flex w-full ">
                  <span>
                    Username<span className="text-lg text-blue-700">*</span>
                  </span>
                  <div className="group relative flex w-full justify-end">
                    <button
                      type="button"
                      name="Autofill credentials"
                      onClick={handleAutofill}
                      className="group   w-fit rounded  bg-blue-600 px-4 py-1 text-xs text-white hover:bg-blue-700"
                    >
                      auto-fill
                    </button>
                    <span className="absolute bottom-full mb-2    hidden whitespace-nowrap rounded bg-gray-800 px-2  py-1 text-xs text-white group-hover:block">
                      Autofill credentials
                    </span>
                  </div>
                </Label>
                <Input
                  type="text"
                  className="w-full rounded-lg border"
                  placeholder="Prajwal Siwa"
                  value={fields[0]}
                  {...register('username', { required: true })}
                  onChange={e => setValue('username', e.target.value)}
                />
              </div>
              <div className="relative flex w-full flex-col gap-2">
                <Label className="flex justify-between">
                  <span>
                    Password<span className="text-lg text-blue-700">*</span>
                  </span>
                </Label>
                <Input
                  type={`${isVisible ? 'text' : 'password'}`}
                  className="w-full rounded-lg border"
                  placeholder="Min. 6 characters"
                  value={fields[1]}
                  {...register('password', { required: true })}
                  onChange={e => setValue('password', e.target.value)}
                />

                <Icon
                  onClick={toggleVisibility}
                  name={`${isVisible ? 'visibility' : 'visibility_off'}`}
                  className="absolute right-4 top-10"
                />
              </div>
            </div>
            {/* <div className="my-2 flex w-full justify-between">
              <div className="flex items-center gap-2">
                <Input type="checkbox" />
                <span>Keep me logged in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer text-blue-700">
                  Forgot password?
                </span>
              </div> */}
            {/* </div> */}
            <Button
              type="submit"
              className="h-12 rounded-lg bg-blue-700 hover:bg-blue-800"
              disabled={isLoading}
            >
              <span className="text-md leading-10 tracking-wider">
                {isLoading ? 'Signing in...' : 'Sign In'}
              </span>
            </Button>
            <span className="text-red-600">
              Use Autofill to pre-fill credentials. Just click Login after that!
            </span>
            {isError && <p className="mt-2 text-red-500">Login failed:</p>}
            {/* <div className="mt-4 flex w-full gap-2">
              <div className="flex items-center gap-2">
                <Input type="checkbox" />
                <span>Not registered yet?</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer text-blue-700">
                  Create an Account
                </span>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
