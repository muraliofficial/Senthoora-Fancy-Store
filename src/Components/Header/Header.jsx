import React from 'react';
import './Header.css';
import assets from '../Assests/Assets';

const Header = () => {
  return (
    <div className="body">
      <div className="box">
        {[...Array(8)].map((_, index) => (
          <span style={{ '--i': index + 1 }} key={index}>
            <img src={assets.testimg} alt={`Cube side ${index + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
