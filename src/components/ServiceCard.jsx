import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-zinc-900/60 text-white border border-white/10 rounded-2xl px-4 py-6 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.7)]">
      <div className="flex items-center justify-center w-12 md:w-14 h-12 md:h-14 lg:w-20 lg:h-20 mb-4 rounded-full bg-white/10">
        <i className={`${icon} text-3xl text-white`}></i>
      </div>
      <h3 className="text-xl lg:text-3xl mt-10 font-semibold mb-2 text-left">{title}</h3>
      <p className="text-sm lg:text-xl mt-4 text-gray-300 text-left">{description}</p>
    </div>
  );
};

export default ServiceCard;