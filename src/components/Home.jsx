import Header from './Header';
import UpcomingParties from './UpcomingParties';
import FAQs from './FAQs';
import BottomNavBar from './BottomNavBar';
import Banner from './Banner';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#073455] pb-20">
      <Header />
      <Banner />
      <UpcomingParties />
      <FAQs />
      <BottomNavBar />
    </div>
  );
};

export default Home;