import React from 'react';
import  {Meta} from './Meta';
import  {AppConfig}  from '../utils/AppConfig';
import  {Footer}  from './Footer';
import {Hero}  from './Hero';
import  {VerticalFeatures}  from './VerticalFeatures';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      {/* <Sponsors /> */}
      <VerticalFeatures />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export { Base };
