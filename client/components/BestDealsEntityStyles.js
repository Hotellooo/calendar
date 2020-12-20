import styled from 'styled-components';

export const BestDealsEntityButtonDiv = styled.div`
  display: block;
  min-height: 42px;
  border-radius: 12px;
  border-color: #f2b203;
  background-color: #f2b203;
  color: #000;
  font-family: 'Poppins', sans-serif;
`;

export const BestDealsEntityDiv = styled.div`
  &:hover  {
    color: #000a12;
    text-decoration: none;
    background: #f9f9f9;
    box-shadow:0 3px 2px -2px hsla(0,0%,60%,.4);
    ${BestDealsEntityButtonDiv}{
      border-color: #fee190;
      background-color: #fee190;
    }
  }

  color: white;
  cursor: pointer;
  color: #000;
  position: relative;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
  padding: 10px 0;
`;

export const BestDealsEntityHeadDiv = styled.div`
  display:flex;
  margin-left: 0;
  margin-right: 0;
`;

export const BestDealsEntityLogoDiv = styled.div`
  color: #4a4a4a;
  font-weight: 700;
  height: 45px;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 33.33333333%;
`;

export const BestDealsEntityLogoPicture = styled.img`
  width: 103px;
  height: 44px;
`;

export const BestDealsEntityPriceDiv = styled.div`
  color: black;
  width: 33.33333333%;
`;

export const BestDealsEntityPriceInnerDiv = styled.div`
  width: 33.33333333%;
`;

export const BestDealsEntityPriceInnerDivQuote = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  padding-top:5px;
  padding-right: 5px;
`;

export const BestDealsEntityButton = styled.div`
  width: 33.33333333%;
  flex:none;
`;

export const BestDealsEntityButtonDivSpan = styled.span`
  display: block;
  padding: 10px 22px;
  font-size: 15px;
  line-height: 20px;
`;

export const BestDealsEntityBottomDiv = styled.div`
  display: block;
`;

export const BestDealsEntityCancellationDiv = styled.div`
  display: inline-block;
  margin-right: 8px;
  line-height: 12px;
  font-size: 12px;
  color: #4a4a4a;
  width: 100%;
`;

export const BestDealsEntityCancellationTextSpan = styled.span`
${props => {
    if (props.type === 'fat') {
      return 'font-weight:700;font-size: 14px;';
    } else {
      return 'font-weight:400;font-size: 12px;';
    }
  }}
  line-height: 12px;
  padding-left: 5px;
`;