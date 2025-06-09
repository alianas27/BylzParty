import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import More from './components/More';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;

