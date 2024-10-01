import { NavLink } from 'react-router-dom';

interface sideBarPropsTypes {
  linkName: string;
  path: string;
}

function SideBarItem({ linkName, path }: sideBarPropsTypes) {
  return (
    <div className=" flex w-full  pl-8  ">
      <NavLink to={path}>
        <div className="text-lg font-normal">{linkName}</div>
      </NavLink>
    </div>
  );
}

export default SideBarItem;
