import { useTypedSelector } from '@Store/hooks';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const { sidebarList, activeItemId } = useTypedSelector(
    state => state.sidebarSlice,
  );

  return (
    <div className="h-full w-[15rem] border-r bg-white   shadow-lg dark:border-r dark:border-r-grey-600  dark:bg-grey-900 dark:text-white">
      <div className="flex w-[14rem] flex-col gap-6   py-16 pl-2 ">
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
