import { useState } from 'react';

const faqs = [
  {
    question: 'How do I attend a House Party?',
    answer: 'Simply visit bylz.xyz, browse through the available parties, and select the one you’re interested in. Send your booking request by completing the payment. You\'ll receive further instructions via WhatsApp and your registered mobile number. If it\'s your first time attending, make sure to upload a valid government ID in your profile. After this, a member of our team will contact you for a quick verification call. Once the call is complete, you’ll be notified of your booking status within a few minutes to a few hours.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer: 'You can cancel your booking, but please note that rescheduling is not offered. If you cancel at least 48 hours before the party start time, you will receive a full refund. A full refund is also provided if the host cancels the party. If you cancel between 24 and 48 hours before the party, you will be eligible for a 50% refund. However, cancellations made within 24 hours of the party start time are non-refundable. We appreciate your understanding, as timely cancellations help us manage limited spots and ensure a great experience for everyone.',
  },
  {
    question: 'Are walk-ins allowed?',
    answer: 'Most parties require prior booking. Some venues may allow walk-ins if slots are available.',
  },
  {
    question: 'Do I need to bring ID proof?',
    answer: 'Yes, carrying a government-issued ID is mandatory for age verification.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Your ultimate go-to guide.</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#102a42] rounded-xl overflow-hidden shadow-lg border border-white/10"
          >
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-white">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-300 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
