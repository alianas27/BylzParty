import SearchBar from './SearchBar';
import UpcomingParties from './UpcomingParties';
import BottomNavBar from './BottomNavBar';

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#073455] pb-20">
      <SearchBar />
      <UpcomingParties enablePagination={true} />
      <BottomNavBar />
    </div>
  );
};

export default Explore;
