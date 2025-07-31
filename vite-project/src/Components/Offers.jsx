import React from 'react';

const offersData = [
  {
    icon: 'wifi-signal.png',
    text: 'Blazing-fast unlimited 5G Airtel Wi-Fi to keep you connected—always.',
  },
  {
    icon: 'spoon.png',
    text: 'Wholesome, home-style veg and non-veg dishes—cooked fresh just for you, upon request.',
  },
  {
    icon: 'clock.png',
    text: '24 hour service to assist you anytime. Day or night, we’re here for you—always just a call away.',
  },
  {
    icon: 'ipl.png',
    text: 'Unlimited entertainment with high-speed internet and a smart TV supporting OTT apps and live sports.',
  },
  {
    icon: 'premium.png',
    text: 'Premium bedding, warm blankets, and curated bath essentials—comfort, redefined.',
  },
];

const Offers = () => {
  return (
    <div className="w-full bg-white rounded-t-[3rem] p-6 md:p-12 z-30 shadow-lg rounded-t-4xl border-2">
      {offersData.map((offer, index) => (
        <div
          key={index}
          className="w-full md:w-[70vh] h-auto rounded-full mb-4 border-2 flex items-center px-4 py-2"
        >
          <div className="w-[7vh] h-[7vh] min-w-[8vh] min-h-[8vh] rounded-full flex items-center justify-center mr-4 overflow-hidden">
            <img
              src={offer.icon}
              alt="icon"
              className="w-[8vh] h-[8vh] object-contain "
            />
          </div>
          <p className="text-sm font-light leading-snug">{offer.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
