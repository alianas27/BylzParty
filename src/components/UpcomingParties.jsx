import { useState, useEffect } from 'react';
import party1 from '../assets/party1.jpg';
import party2 from '../assets/party2.jpg';
import party3 from '../assets/party3.jpg';
import party4 from '../assets/party4.jpg';

const partyData = [
  {
    id: 1,
    image: party1,
    date: 'Sat, Jun 8',
    time: '8:00 PM - 1:00 AM',
    location: 'Delhi',
    title: 'Glow in the Dark Bash',
    cover: 799,
    age: '21-35',
    description: 'Dance the night away under black lights with glowing drinks, music, and UV face paint!',
    host: 'DJ Roxy',
    bookingLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeOwBcinKroqbGy47bgeF31WtNBPLVnSTvXkeomvVoPpRjYJA/viewform?usp=header',
    perks: ['Glow Paint', 'Neon Cocktails', 'Live DJ', 'Snacks Included'],
    extras: {
      includes: 'Includes 2 Glow Cocktails, Snacks, and BYOB access',
      capacity: 50,
      ratio: '50% Male / 50% Female',
      hostedCount: 18,
    },
  },
  {
    id: 2,
    image: party2,
    date: 'Sun, Jun 9',
    time: '6:00 PM - 10:00 PM',
    location: 'Noida',
    title: 'Sundowner Chill',
    cover: 599,
    age: '18-30',
    description: 'A rooftop sundowner party with acoustic music, fairy lights, and cozy vibes.',
    host: 'Akash Singh',
    bookingLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeOwBcinKroqbGy47bgeF31WtNBPLVnSTvXkeomvVoPpRjYJA/viewform?usp=header',
    perks: ['Live Music', 'Sunset Drinks', 'Board Games'],
    extras: {
      includes: 'Includes 1 Cocktail, Appetizers & Experience',
      capacity: 30,
      ratio: '40% Male / 60% Female',
      hostedCount: 9,
    },
  },
  {
    id: 3,
    image: party3,
    date: 'Fri, Jun 14',
    time: '9:00 PM - 2:00 AM',
    location: 'Gurugram',
    title: 'Bollywood Nights',
    cover: 999,
    age: '22-40',
    description: 'Get ready for a full desi vibe with non-stop Bollywood hits and desi street food!',
    host: 'DJ Anvi',
    bookingLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeOwBcinKroqbGy47bgeF31WtNBPLVnSTvXkeomvVoPpRjYJA/viewform?usp=header',
    perks: ['Unlimited Desi Snacks', 'Photo Booth', 'Best Dancer Prizes'],
    extras: {
      includes: 'Includes 2 Drinks, Snacks, and Entry to Dance Battle',
      capacity: 60,
      ratio: '55% Male / 45% Female',
      hostedCount: 20,
    },
  },
  {
    id: 4,
    image: party4,
    date: 'Sat, Jun 15',
    time: '7:00 PM - 12:00 AM',
    location: 'Delhi',
    title: 'Techno Beats Underground',
    cover: 849,
    age: '20-35',
    description: 'Experience deep techno, laser lights, and a mysterious vibe in an underground setup.',
    host: 'DJ Arka',
    bookingLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeOwBcinKroqbGy47bgeF31WtNBPLVnSTvXkeomvVoPpRjYJA/viewform?usp=header',
    perks: ['Techno Lineup', 'Unlimited Mocktails', 'Laser Light Show'],
    extras: {
      includes: 'Entry + Unlimited Mocktails + Energy Snacks',
      capacity: 45,
      ratio: '60% Male / 40% Female',
      hostedCount: 14,
    },
  },
];

const tabs = ['All', 'Delhi', 'Noida', 'Gurugram'];

const UpcomingParties = ({ enablePagination = false }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedParty, setSelectedParty] = useState(null);
  const [accordion, setAccordion] = useState({ rules: false, attend: false, cancel: false });

  const partiesPerPage = 8;
  const filteredParties =
    activeTab === 'All' ? partyData : partyData.filter((party) => party.location === activeTab);
  const totalPages = Math.ceil(filteredParties.length / partiesPerPage);
  const startIdx = (currentPage - 1) * partiesPerPage;
  const visibleParties = enablePagination
    ? filteredParties.slice(startIdx, startIdx + partiesPerPage)
    : filteredParties;

  useEffect(() => {
    document.body.style.overflow = selectedParty ? 'hidden' : 'auto';
  }, [selectedParty]);

  const toggleAccordion = (section) => {
    setAccordion((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="w-full px-4 py-4 text-white">
      <h2 className="text-xl font-semibold mb-4">Upcoming Parties in the City</h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
            className={`text-sm px-5 py-2 rounded-full transition whitespace-nowrap ${
              activeTab === tab ? 'bg-white text-black font-semibold' : 'bg-[#204866] text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Party Cards */}
      <div className="flex flex-col space-y-4">
        {visibleParties.length === 0 ? (
          <div className="text-center text-gray-300 text-base">No parties available 🎉</div>
        ) : (
          visibleParties.map((party) => (
            <div
              key={party.id}
              onClick={() => setSelectedParty(party)}
              className="cursor-pointer relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={party.image} alt={party.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-4 space-y-2">
                <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold rounded-full px-3 py-1">
                  Age: {party.age}
                </div>
                <div className="flex text-sm text-gray-200 gap-2">
                  <span>{party.date}</span> • <span>{party.location}</span>
                </div>
                <h3 className="text-xl font-bold">{party.title}</h3>
                <div className="mt-2 text-sm text-gray-300 flex justify-between items-center">
                  <a
                    href={party.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black py-2 px-4 rounded-full text-sm font-semibold self-start"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book your slot
                  </a>
                  <span className="text-white">Cover: ₹{party.cover}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full text-sm ${
                currentPage === i + 1 ? 'bg-white text-black font-bold' : 'bg-[#204866] text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Party Detail View */}
      {selectedParty && (
        <div className="fixed inset-0 z-50 bg-white text-black overflow-y-auto">
          <div className="relative w-full">
            <div className="relative h-[300px] w-full overflow-hidden">
              <img
                src={selectedParty.image}
                alt={selectedParty.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full shadow"
                onClick={() => setSelectedParty(null)}
              >
                ← Back
              </button>
            </div>

            <div className="px-4 py-6 space-y-4 max-w-3xl mx-auto mb-14">
              <h1 className="text-2xl font-bold">{selectedParty.title}</h1>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Date:</strong> {selectedParty.date}</p>
                <p><strong>Time:</strong> {selectedParty.time}</p>
                <p><strong>Location:</strong> {selectedParty.location}</p>
                <p><strong>Hosted by:</strong> {selectedParty.host} ({selectedParty.extras?.hostedCount} parties hosted)</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-1">About Party</h2>
                <p className="text-gray-700">{selectedParty.description}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-1">What's Included</h2>
                <p className="text-gray-700">{selectedParty.extras?.includes}</p>
                <ul className="list-disc list-inside text-gray-700 mt-1">
                  {selectedParty.perks?.map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                <div><strong>Age Limit:</strong> {selectedParty.age}</div>
                <div><strong>Cover Charge:</strong> ₹{selectedParty.cover}</div>
                <div><strong>Capacity:</strong> {selectedParty.extras?.capacity} people</div>
                <div><strong>Gender Ratio:</strong> {selectedParty.extras?.ratio}</div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">House Party Flow</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Break the Ice, Baby!</li>
                  <li>Game On!</li>
                  <li>Feel the Vibes</li>
                  <li>Chat and Chill</li>
                </ul>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { key: 'rules', label: 'House Rules', content: 'Respect everyone, no fighting, keep it clean and fun.' },
                  { key: 'attend', label: 'How to Attend the Party', content: 'Buy a ticket, show up on time, and bring your vibe!' },
                  { key: 'cancel', label: 'Cancellation Policy', content: '100% refund 48 hrs before, 50% refund 24 hrs before, no refund after that.' },
                ].map((item) => (
                  <div key={item.key} className="border border-gray-300 rounded-lg">
                    <button
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                    >
                      {item.label}
                      <span>{accordion[item.key] ? '−' : '+'}</span>
                    </button>
                    {accordion[item.key] && (
                      <div className="px-4 pb-4 text-gray-700 text-sm">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={selectedParty.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 w-full bg-black text-white py-3 rounded-full font-bold text-lg text-center"
              >
                Book Your Slot
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingParties;
