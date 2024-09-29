import { NavLink } from 'react-router-dom';

interface sideBarPropsTypes {
  linkName: string;
  path: string;
}

function SideBarItem({ linkName, path }: sideBarPropsTypes) {
  return (
    <div>
      <NavLink to={`/${path}`}>{linkName}</NavLink>;
    </div>
  );
}

export default SideBarItem;
