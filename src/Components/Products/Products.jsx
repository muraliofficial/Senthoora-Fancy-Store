import React, { useEffect } from 'react';
import './Products.css';
import assets from '../Assests/Assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  const images = [
    { src: assets.Bangles, alt: 'Bangles' },
    { src: assets.Handbags, alt: 'Handbags' },
    { src: assets.Makeupitems, alt: 'Makeup Items' },
    { src: assets.giftitem, alt: 'Gift Item' },
    { src: assets.perfumes, alt: 'Perfumes' },
    { src: assets.smallDecors, alt: 'Small Decors' },
    { src: assets.stationery, alt: 'Stationery' },
    { src: assets.toys, alt: 'Toys' },
  ];


  // Initialize AOS with custom settings
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className='div'>
      <div className="head">
        {/* Add any header content here if needed */}
      </div>
      <div className="body" data-aos="fade-up">
        <h1>Welcome To Our Shop</h1>
        <h3>Explore Our Newest</h3>
        <div className="box">
          {images.map((image, index) => (
            <span key={index} style={{ '--i': index + 1 }}>
              <img src={image.src} alt={image.alt} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
