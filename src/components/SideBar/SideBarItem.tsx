import Icon from '@Components/common/Icon';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setActiveItem } from '@Store/actions/sidebar';

interface sideBarPropsTypes {
  id: number;
  linkName: string;
  path: string;
  iconName: string;
  isActive: boolean;
}

function SideBarItem({
  id,
  linkName,
  path,
  iconName,
  isActive,
}: sideBarPropsTypes) {
  const dispatch = useDispatch();

  function handleActiveItem(itemId: number) {
    dispatch(setActiveItem(itemId));
  }

  return (
    <div className="flex w-full pl-8">
      <NavLink to={path} className="w-full">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 pr-4"
          onClick={() => handleActiveItem(id)}
        >
          <Icon
            name={iconName}
            className={`${isActive ? '!text-2xl !font-medium text-grey-900' : '!text-slate-500 '}`}
          />
          <div
            className={`flex w-full items-start  ${isActive ? 'rounded-sm border-r-4 border-r-grey-800 text-lg font-medium tracking-wide text-black dark:border-r-grey-200 dark:text-grey-500' : 'border-none text-lg text-slate-500 dark:text-white'}`}
          >
            {linkName}
          </div>
        </button>
      </NavLink>
    </div>
  );
}

export default SideBarItem;
