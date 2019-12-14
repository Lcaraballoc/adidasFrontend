import React from 'react';
import Header from '../components/Header';
import Discounts from '../components/DiscountsBar';
import Mainboard from '../components/Mainboard';

const App = () => {
  return (
    <div>
      <Header />
      <Discounts />
      <Mainboard />
    </div>
  );
};

export default App;
