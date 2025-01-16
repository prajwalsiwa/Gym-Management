import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navList = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Membership',
    link: '/membership',
  },
  {
    id: 3,
    name: 'Subscription',
    link: '/subscription',
  },
  {
    id: 4,
    name: 'Login',
    link: '/login',
  },
  {
    id: 5,
    name: 'Settings',
    link: '/settings',
  },
];

function Navbar() {
  const [activeTab, setActiveTab] = useState(1);

  const handleNavClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="w-fit overflow-hidden rounded-3xl border border-gray-700 ">
      <nav className="nav-container">
        <div className="nav-menu flex w-fit">
          {navList.map((nav: { id: number; name: string; link: string }) => (
            <NavLink
              to={nav.link}
              key={nav.id}
              className={`text-md rounded-3xl px-5 py-2.5 font-medium transition-all duration-200 ${
                activeTab === nav.id
                  ? 'bg-grey-200 font-semibold text-gray-800 dark:bg-white'
                  : ' dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
              onClick={() => handleNavClick(nav.id)}
              aria-current={activeTab === nav.id ? 'page' : undefined}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
