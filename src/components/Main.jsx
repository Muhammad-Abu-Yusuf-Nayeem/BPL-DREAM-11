import React from 'react';
import Banner from './Banner';
import AvailablePlayers from './AvailablePlayers';

const Main = ({ handleAddMoney }) => {
  return (
    <div>
          <Banner handleAddMoney={handleAddMoney} />
          <AvailablePlayers></AvailablePlayers>
    </div>
  );
};

export default Main;