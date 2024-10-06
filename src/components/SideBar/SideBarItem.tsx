import Icon from '@Components/common/Icon';
import { NavLink } from 'react-router-dom';

interface sideBarPropsTypes {
  linkName: string;
  path: string;
  iconName: string;
}

function SideBarItem({ linkName, path, iconName }: sideBarPropsTypes) {
  return (
    <div className=" flex w-full  pl-8  ">
      <NavLink to={path} className="flex  items-center justify-center gap-2">
        <Icon name={iconName} />
        <div className="text-lg font-normal">{linkName}</div>
      </NavLink>
    </div>
  );
}

export default SideBarItem;
