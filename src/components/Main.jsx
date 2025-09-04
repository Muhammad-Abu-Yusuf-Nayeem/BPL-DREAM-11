import React from 'react';
import Banner from './Banner';

const Main = ({ handleAddMoney }) => {
  return (
    <div>
      <Banner handleAddMoney={handleAddMoney} />
    </div>
  );
};

export default Main;