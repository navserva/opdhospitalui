import React from 'react';
import EN from './img/260-united-kingdom.png'; // Tell webpack ENis JS file uses ENis image

// console.log(EN); // /logo.84287d09.png

function EN_img() {
  // Import result is ENe URL of your image
  return <img src={EN} alt="TH" height="42" weight="42"/>;
}
export default EN_img;

