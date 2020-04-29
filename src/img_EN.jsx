import React from 'react';
import EN from './img/united-kingdom.png'; // Tell webpack this JS file uses this image

// console.log(EN); // /logo.84287d09.png

function EN_img() {
  // Import result is the URL of your image
  return <img src={EN} alt="TH" height="42" weight="42"/>;
}
export default EN_img;

