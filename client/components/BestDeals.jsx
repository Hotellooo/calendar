import React from 'react';
import BestDealsEntity from './BestDealsEntity.jsx';
import getBestOrRestDeals from '../lib/getBestOrRestDeals.js';
import styled from 'styled-components';
import { BestDealsWrapper } from './BestDealsStyles.js';

const BestDeals = ({ currentHotel, userDates }) => {
  if (currentHotel.length === 0 || !currentHotel) {
    return (<div>Loading...</div>);
  } else {
    let best = getBestOrRestDeals(currentHotel, 'getBest');
    return (
      <div>
        <BestDealsWrapper>
          {best.map((item)=>(
            <BestDealsEntity
              item={item}
              key={item._id}
              userDates={userDates}
            />
          ))}
        </BestDealsWrapper>
      </div>
    );
  }
};

export default BestDeals;