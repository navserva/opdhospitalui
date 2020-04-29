import React from 'react';
import TH from './img/238-thailand.png'; // Tell webpack this JS file uses this image

// console.log(TH); // /logo.84287d09.png

function TH_img() {
  // Import result is the URL of your image
  return <img src={TH} alt="TH" height="42" weight="42"/>;
}
export default TH_img;

