import { useTypedSelector } from '@Store/hooks';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const { sidebarList, activeItemId } = useTypedSelector(
    state => state.sidebarSlice,
  );

  return (
    <div className="h-full w-72 bg-white shadow-xl">
      <div className=" flex h-28 items-center   pl-12">
        <div>
          <span className="text-xl font-extrabold">HORIZON</span>{' '}
          <span className="text-xl font-medium"> GYM</span>
        </div>
      </div>
      <hr className="ml-4 w-60 border-t-2 border-gray-300" />
      <div className="flex flex-col gap-6   pl-2 pt-10 ">
        {sidebarList.map(item => (
          <SideBarItem
            id={item.id}
            key={item.id}
            linkName={item.name}
            path={item.path}
            iconName={item.icon}
            isActive={item.id === activeItemId}
          />
        ))}
      </div>
    </div>
  );
}
