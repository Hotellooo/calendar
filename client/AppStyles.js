import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-color: lightblue;
  min-width: 395px;
  height: 478px;
  padding: 4px 16px 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  min-height: 430px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  position: relative;
  z-index: 20;
  font-family: 'Poppins', sans-serif;
`;

export const CalendarGuestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: auto;
`;

export const DatePickerWrapper = styled.div`
  display: block;
  flex-direction: row;

`;

export const DatePickerButton = styled.button`
  flex: 1 1 0%;
  display: inline-block;
  height: 100%;
  margin: 0 0 0 8px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  background: #fff;
  padding: 0;
  text-align: left;
  font-size: inherit;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  width: 172.5px;
`;

export const DatePickerButtonDiv = styled.div`
&:before {
  content: ".";
  display: inline-block;
  vertical-align: middle;
  height: 42px;
  width:10px;
  ${(props) => {
    return props.color === 'green' ? 'background-color:#00a680; color:#00a680' : 'background-color:#d91e18; color:#d91e18';
  }}
  }

  height: 100%;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
`;

export const DatePickerButtonDivIconSpan = styled.span`
//investigate
&:before{
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    font-size: inherit;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    speak: none;
    text-decoration: none;
}

font-size: 1.25em;
color: #767676;
vertical-align: middle;
padding-left: 10px;
padding-right: 5px;
`;

export const DatePickerButtonDivFieldSpan = styled.span`
display: inline-block;
    vertical-align: middle;
    margin-top: 3px;
    padding: 0 6px;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
`;

export const DatePickerButtonDivFieldSpanCheckIn = styled.span`
display: block;
margin-bottom: 2px;
font-size: .75em;
line-height: normal;
color: #4a4a4a;
`;

export const DatePickerButtonDivFieldSpanDate = styled.span`
display: block;
    font-size: .8125em;
    font-weight: 700;
    line-height: 20px;
`;

export const DealsWrapper = styled.div`
  display: block;
`;


export const GuestsWrapper = styled.div`
  height: 100%;
  vertical-align: top;
  white-space: normal;
  text-align: left;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000a12;
  margin-top: 10px;
`;

export const GuestsButton = styled.button`
  display: inline-block;
  width: 354px;
  height: 100%;
  margin: 0 0 0 8px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  background: #fff;
  padding: 0;
  text-align: left;
  font-size: inherit;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
`;

export const GuestsButtonDiv = styled.div`
  height: 100%;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
`;

export const GuestsButtonIconSpan = styled.span`
  display: none;
  margin: 0 0 0 4px;
  font-size: 1.25em;
  color: #767676;
  vertical-align: middle;
`;

export const GuestsButtonPickerSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-top: 3px;
  padding: 0 6px;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;
`;

export const GuestsButtonPickerSpanGuestsSpan = styled.span`
  display: block;
  margin-bottom: 2px;
  font-size: .75em;
  line-height: normal;
  color: #4a4a4a;
`;

export const GuestsButtonPickerSpanGuestsConfigSpan = styled.span`
  font-size: .8125em;
  font-weight: 700;
  line-height: 20px;
`;

export const GuestsButtonPickerSpanGuestsConfigInnerSpan = styled.span`
  font-size: 1em;
  font-weight: 700;
  line-height: 20px;
`;

export const HeaderWrapper = styled.div`
  // height: 44px;
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 16px;
  line-height: 42px;
  font-weight: 700;
  text-align: center;
  white-space: normal;

  height: 30px;
`;

export const HeaderTextBlock = styled.div`
  display: inline-block;
  // vertical-align: top;
  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  color: #d91e18;
  background: #fff;
  text-align: center;

  vertical-align: top;
  height: 27px;
`;

export const HeaderIconSpan = styled.span`
  font-size: 125%;
  line-height: normal;
  content: '\e0be';
`;

export const HeaderTextSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  color: #d91e18;
  background: #fff;
  text-align: center;
`;

export const MainWrapper = styled.div`
  position: relative;
  display: block;
  width: 419px;
  height: 507px;
  font-family: 'Poppins', sans-serif;
`;