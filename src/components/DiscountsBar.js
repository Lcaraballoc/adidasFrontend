import React from 'react';
import '../assets/styles/components/DiscountsBar.scss';

const DiscountsBar = () => {
  return (
    <div className='discount-container'>
      <ol>
        <li>
          <a className='link' href='#portafolio'>FRIENDS AND FAMILY 30% OFF - USE CODE:FRIEDS</a>
        </li>
        <li>
          <a className='link' href='#eventos'>NEED GIFTS BY 12/25 ? ORDER BY 12/19</a>
        </li>
        <li>
          <a className='link' href='#contacto'>FREE SHIPPING OVER $49 AMD FREE RETURNS</a>
        </li>
      </ol>
    </div>
  );
};

export default DiscountsBar;

