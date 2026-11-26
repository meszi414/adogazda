import React from 'react';

const HeroOneButton = ({ title, description, button }) => (
  <header className="text-center py-20 bg-blue-600 text-white">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-tight">
      {title}
    </h1>
    <div className="mb-8 mt-4 text-2xl">{description}</div>
    <div className="mt-8">{button}</div>
  </header>
);

export { HeroOneButton };
