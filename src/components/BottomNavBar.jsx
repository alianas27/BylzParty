import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/home.svg';
import ExploreIcon from '../assets/explore.svg';
import MoreIcon from '../assets/more.svg';

const BottomNavBar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home', path: '/' },
    { id: 'explore', icon: ExploreIcon, label: 'Explore', path: '/explore' },
    { id: 'more', icon: MoreIcon, label: 'More', path: '/more' }, // can be updated later
  ];

  return (
    <nav className="fixed w-[60%] bottom-4 left-1/2 transform -translate-x-1/2 rounded-full bg-white shadow-md flex justify-around py-4 z-50">
      {navItems.map(({ id, icon: Icon, label, path }) => (
        <Link
          key={id}
          to={path}
          className="flex flex-col items-center focus:outline-none"
          aria-label={label}
        >
          <img
            src={Icon}
            alt={label}
            className={`w-6 h-6 ${
              (activePath === '/' && id === 'home') ||
              (activePath === '/explore' && id === 'explore') ||
              (activePath === '/more' && id === 'more')
                ? 'opacity-100'
                : 'opacity-40'
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavBar;
