import React from 'react';
import '../assets/styles/components/DiscountsBar.scss';

const DiscountsBar = () => {
  return (
    <div className='discount__container'>
      <ol>
        <li>
          <a href='#'>FRIENDS AND FAMILY 30% OFF - USE CODE:FRIEDS</a>
        </li>
        <li>
          <a href='#'>NEED GIFTS BY 12/25 ? ORDER BY 12/19</a>
        </li>
        <li>
          <a href='#'>FREE SHIPPING OVER $49 AMD FREE RETURNS</a>
        </li>
      </ol>
    </div>
  );
};

export default DiscountsBar;

