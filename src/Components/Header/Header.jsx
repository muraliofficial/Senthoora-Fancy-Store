import React from 'react';
import './Header.css';
import girlwelcome from '../Assests/Girl-Welcome.png'
export default function Header() {
  return (
    <div className='' id='Header'>
      <div className="container" id='Header-Container'>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <img src={girlwelcome} alt="" id='girlwelcomeimg' />
            </div>
          </div>
          <div className="col-6">
            <div className="card" id='welcomecard'>
              <h1> Welcome...!!!</h1>
              <p class="animated-paragraph">Welcome to our shop! We hope you discover exactly what you're looking for and enjoy a seamless, satisfying shopping experience with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
