import React from 'react'
import ImageCarousel from './ImgCarousel';
import {Link} from "react-router-dom"

import schoolstuff from '../assests/images/school_stuff1.jpg';
import bookstuff from '../assests/images/book_stuff_2.png';
import foodstuff from '../assests/images/food_stuff_3.jpg';

const Hero = () => {

  const images = [
    schoolstuff,
    bookstuff,
    foodstuff
  ];

  return (
    <div className="App" id="Hero_grid">
      
        <div><h2>Only The Best Deals At Shop Hippo</h2></div>
        <div><Link to="/products"><ImageCarousel images={images} /></Link></div>
        <div><h2>Buy Now And Save Up To 25% On Your Desired Product</h2></div>
        
      
    
  </div>
  )
}

export default Hero
