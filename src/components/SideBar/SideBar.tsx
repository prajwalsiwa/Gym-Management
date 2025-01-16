import { useTypedSelector } from '@Store/hooks';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const { sidebarList, activeItemId } = useTypedSelector(
    state => state.sidebarSlice,
  );

  return (
    <div className="h-full w-72 bg-white shadow-2xl  dark:bg-grey-900 dark:text-white">
      <div className="flex flex-col gap-6   py-10 pl-2 ">
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
