import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  BestDealsEntityDiv, BestDealsEntityHeadDiv, BestDealsEntityLogoDiv, BestDealsEntityPriceDiv, BestDealsEntityButton, BestDealsEntityLogoPicture, BestDealsEntityPriceInnerDiv, BestDealsEntityPriceInnerDivQuote, BestDealsEntityButtonDiv, BestDealsEntityButtonDivSpan, BestDealsEntityBottomDiv, BestDealsEntityCancellationDiv, BestDealsEntityCancellationTextSpan

} from './BestDealsEntityStyles.js';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestDealsEntity = ({ item, userDates }) => {
  const chooseLogo = (item) => {
    const links = {
      'Hotels.com': 'https://static.tacdn.com/img2/branding/hotels/Hotelscom_384x164.png',
      'Booking.com': 'https://static.tacdn.com/img2/branding/hotels/booking logo.png',
      'Expedia.com': 'https://static.tacdn.com/img2/branding/hotels/expediaib_new_384164.png',
      'Snaptravel': 'https://static.tacdn.com/img2/branding/hotels/Snaptravel_384x164.png',
      'Orbitz.com': 'https://static.tacdn.com/img2/branding/hotels/orbitzews_384164.png',
      'Tripadvisor': 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary.svg',
      'Priceline': 'https://static.tacdn.com/img2/branding/hotels/pcln-logo-384x164.png',
      'eDreams': 'https://static.tacdn.com/img2/branding/hotels/ed_16852.png',
      'Zenhotels': 'https://static.tacdn.com/img2/branding/hotels/zenlogo.png',
      'Prestigia': 'https://static.tacdn.com/img2/branding/hotels/logo-prestigia-size-384-164.png'
    };
    return (
      <BestDealsEntityLogoPicture src={links[item.serviceName]}></BestDealsEntityLogoPicture>
    );
  };

  const calcFreeCancel = ({ checkIn }) => {
    let result = 'Free cancellation ';
    if (checkIn) result += 'until ' + moment(checkIn).subtract(2, 'days').format('MM/DD/YY');
    return result;
  };

  return (
    <div>
      <BestDealsEntityDiv>

        <BestDealsEntityHeadDiv>

          <BestDealsEntityLogoDiv>
            {chooseLogo(item)}
          </BestDealsEntityLogoDiv>

          <BestDealsEntityPriceDiv>
            <BestDealsEntityPriceInnerDivQuote>${item.price}</BestDealsEntityPriceInnerDivQuote>
          </BestDealsEntityPriceDiv>

          <BestDealsEntityButton>
            <BestDealsEntityButtonDiv>
              <BestDealsEntityButtonDivSpan>View Deal</BestDealsEntityButtonDivSpan>
            </BestDealsEntityButtonDiv>
          </BestDealsEntityButton>
        </BestDealsEntityHeadDiv>

        <BestDealsEntityBottomDiv>
          <BestDealsEntityCancellationDiv>
            <FontAwesomeIcon icon={faCheck}/>
            <BestDealsEntityCancellationTextSpan type="fat">
              {calcFreeCancel(userDates)}
            </BestDealsEntityCancellationTextSpan>
          </BestDealsEntityCancellationDiv>

          <BestDealsEntityCancellationDiv>
            <FontAwesomeIcon icon={faCheck}/>
            <BestDealsEntityCancellationTextSpan type="slim">Reserve now, pay at stay</BestDealsEntityCancellationTextSpan>
          </BestDealsEntityCancellationDiv>
        </BestDealsEntityBottomDiv>

      </BestDealsEntityDiv>
    </div>
  );
};

export default BestDealsEntity;
