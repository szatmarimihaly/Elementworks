import React from 'react';

const TechCard = ({ tech }) => {
  return (

    <div className={`flex flex-col items-center ${tech.bg} py-10 md:py-16 lg:py-16 rounded-2xl hover:scale-105 trasition-transform duration-300 cursor-default`}>
        <i className={`${tech.icon} text-3xl md:text-6xl mb-2 ${tech.text}`}></i>
        <span className={`text-md md:text-lg font-semibold text-center cursor-default ${tech.textColor} pointer-events-none`}>{tech.name}</span>
    </div>

  );
};

export default TechCard;