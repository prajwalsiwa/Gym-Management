import { ReactNode } from 'react';

interface NavigationPropsTypes {
  headerName?: string;
  children?: ReactNode;
}

function Navigation({ headerName, children }: NavigationPropsTypes) {
  return (
    <div className="grid h-14 w-full grid-cols-[40%_60%] items-center justify-between bg-gradient-to-r from-gray-800 to-gray-400 px-8 py-2">
      <h4 className="flex h-full w-full items-center justify-start  text-white">
        {headerName}
      </h4>
      <div className="flex w-full justify-between">{children}</div>
    </div>
  );
}

export default Navigation;
