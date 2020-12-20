import styled from 'styled-components';

export const AllDealsWrapper = styled.div`
  margin-top: 8px;
  display: block;
  font-family: 'Poppins', sans-serif;
`;

export const AllDealsMainDiv = styled.div`
  display: flex;
  margin-left: -12px;
  margin-right: -12px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const AllDealsEntityOuter = styled.div`
  flex: none;
  width: 50%;
  padding: 2px 12px;
  box-sizing: border-box;
  min-height: 18px;
  max-height: 18px;
`;

export const AllDealsEntityInner = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  color: #4a4a4a;
  position: relative;
  overflow: hidden;
  min-height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;
`;

export const AllDealsEntityServiceSpan = styled.span`
  padding-right: 3px;
  position: relative;
  display: flex;
  max-width: 100px;
  min-height: 18px;
`;

export const AllDealsEntityServiceNameSpan = styled.span`
  display: flex;
  color: #4a4a4a;
  position: relative;
  overflow: hidden;
  min-height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;
`;

export const AllDealsEntityServiceIconSpan = styled.span`
&:before {
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}
  display: flex;
  color: #4a4a4a;
  position: relative;
  overflow: hidden;
  min-height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 16px;
  padding-top:2px;
  padding-left:2px;
`;


export const AllDealsEntityPriceSpan = styled.span`
  position: absolute;
  right: 0;
  padding-left: 3px;
  font-weight: 700;
  color: #000a12;
  min-height: 18px;
`;

export const AllDealsBottomDiv = styled.div`
  margin: 8px 0 12px;
  font-size: 13px;
  line-height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #767676;
  cursor: pointer;
`;

export const ViewAllWrapper = styled.div`
  flex-shrink: 1;
  padding: 2px;
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;
  -webkit-box-flex: 1;
  display: block;
`;

export const ViewAllDiv = styled.div`
  color: #000a12;
  font-weight: 700;
  height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;

`;

export const ViewAllPortalWrapper = styled.div`
  background-color: lightblue;
  width: 208px;
  height: auto;
  padding: 4px 16px 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  position: absolute;
  z-index: 25;
  top:450px;
  left: 150px;
`;

export const ViewAllPortal = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

export const ViewAllPortalLine = styled.div`
  color: #4a4a4a;
  position: relative;
  min-height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;
  width: 100%;
  padding-top:10px;
`;

export const ViewPortalLineDiv = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px;
  color: #4a4a4a;
  min-height: 18px;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;
`;

export const ViewAllPortalLineInnerDiv = styled.div`
  color: #4a4a4a;
`;

export const ViewPortalLineNameSpan = styled.span`
  padding-left:5px;
  color: #4a4a4a
`;

export const ViewPortalLinePriceSpan = styled.span`
  font-weight:700;
  padding-left: 3px;
  color: #000a12;
  line-height: 1.5em;
  cursor: pointer;
  font-size: 12px;
`;

export const ViewAllPortalLineIconSpan = styled.span`
  color: black;
`;

export const PopupWrapper = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  position: absolute;
  z-index: 25;
  top: 380px;
  left: 420px;
  width: 300px;
  height: auto;
`;

export const PopupTextDiv = styled.div`
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: grey;
`;
