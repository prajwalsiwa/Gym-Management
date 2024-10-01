import { useTypedSelector } from '@Store/hooks';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const sidebarList = useTypedSelector(state => state.sidebarSlice.sidebarList);

  return (
    <div className="flex h-full w-72  flex-col bg-white">
      {sidebarList.map(item => (
        <SideBarItem key={item.id} linkName={item.name} path={item.path} />
      ))}
    </div>
  );
}
