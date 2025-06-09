import { useState } from 'react';
import BottomNavBar from './BottomNavBar';
import backArrow from '../assets/backArrow.svg';

import AboutUs from './pages/AboutUs';
import Disclaimer from './pages/Disclaimer';
import Refunds from './pages/Refunds';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const pages = [
  { id: 'about', title: 'About Us', Component: AboutUs },
  { id: 'disclaimer', title: 'Disclaimer', Component: Disclaimer },
  { id: 'refunds', title: 'Refunds', Component: Refunds },
  { id: 'terms', title: 'Terms And Conditions', Component: TermsConditions },
  { id: 'privacy', title: 'Privacy Policy', Component: PrivacyPolicy },
  
];

const More = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <div className="min-h-screen bg-[#073455] text-white pb-20">
      <div className="px-4 py-3">
        {/* Header */}
        <div className="w-full pb-4 gap-3 flex items-center">
          <button onClick={() => window.history.back()} aria-label="Go Back" className="bg-[#204866] rounded-full p-3">
            <img src={backArrow} alt="Back" className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold">More</h2>
        </div>

        {/* List of Links */}
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.id}>
              <button
                onClick={() => setActivePage(page)}
                className="w-full text-left text-base py-2 px-4 bg-white/10 rounded-md hover:bg-white/20"
              >
                {page.title}
              </button>
            </li>
          ))}

          {/* 📎 External Link for Contact */}
          <li>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSd9yemXVeFZ2UTSMf2AGLxfP7f5I_HFbbcINNRf_3jxdr8aAg/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-left text-base py-2 px-4 bg-white/10 rounded-md hover:bg-white/20"
  >
    Contact Us
  </a>
</li>

        </ul>
      </div>

      <BottomNavBar />

      {/* Modal */}
      {activePage && (
        <div className="fixed inset-0 bg-[#073455] z-50 flex flex-col pt-10">
          <div className="px-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">{activePage.title}</h3>
            <button
              onClick={() => setActivePage(null)}
              className="text-white text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="p-4 overflow-y-auto text-sm text-white">
            <activePage.Component />
          </div>
        </div>
      )}
    </div>
  );
};

export default More;
