import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/searchIcon.svg';
import backArrow from '../assets/backArrow.svg'; 

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-3 flex items-center space-x-3">
      {/* Back Arrow */}
      <button onClick={() => navigate('/')} aria-label="Go Back" className="bg-[#204866] rounded-full p-3">
        <img src={backArrow} alt="Back" className="h-6 w-6" />
      </button>

      {/* Search Input */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 h-[48px] flex-grow">
        <img src={searchIcon} alt="Search" className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white placeholder-gray-400 text-sm ml-3 outline-none w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
