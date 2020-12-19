import React from 'react';
import styled from 'styled-components';

export const CalendarPortalWrapper = styled.div`
  background-color: lightblue;
  width: 597px;
  height: 430px;
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
  z-index: 25;
  font-family: 'Poppins', sans-serif;
  top: 5px;
  left:150px;
  position:absolute;
`;

export const CalendarHeader = styled.div`
  font-size: 15px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
  font-weight: 500;
  text-align: center;
`;

export const CalendarHeaderTop = styled.div`
`;

export const CalendarHeaderTopText = styled.span`
`;

export const CloseButton = styled.button`
  &:before {
    content: "x";
    font-size: 18px;
    line-height: 36px;
    color:#4a4a4a;
  }
    position: absolute;
    top: 6px;
    right: 6px;
    text-align: center;
    transition: opacity .2s;
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    background: #fff;
    padding: 0;
`;

export const CalendarLegendDiv = styled.div`
  padding-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #4a4a4a;
`;

export const CalendarLegendSpan = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: #f2b203;
`;

export const CalendarMonths = styled.div`
  white-space: nowrap;
  text-align: center;
`;

export const CheckInContainer = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

export const CheckInWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const CalendarNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  padding: 5px 7px;
`;

export const CalendarNavBarButton = styled.button`
  height: 36px;
  width: 36px;
  line-height: 36px;
  text-align: center;
  color: #4a4a4a;
  cursor: pointer;
  font-size: 20px;
  transition: color .3s;
  border: none;
  text-decoration: none;
  background: #fff;
  padding: 0;
  font-family: inherit;
`;

export const CalendarNavBarButtonIcon = styled.div`
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  font-size: inherit;
  line-height: 1;
  color:#4a4a4a
`;

export const CalendarMonthsDiv = styled.div`
  white-space: nowrap;
  text-align: center;
  margin: 0;
  padding: 0;
  user-select: none;
`;

export const CalendarGrid = styled.div`
  display: inline-block;
  padding: 0 16px;
  margin: 12px 0;
  vertical-align:text-top;
`;

export const CalendarCaption = styled.div`
  display: block;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 500;
`;

export const CalendarWeekdays = styled.div`
  display: block;
`;

export const CalendarBody = styled.div`
  display: block;
`;

export const WeekDaysRow = styled.div`
  display: flex;
  white-space: nowrap;
  text-align: center;
`;

export const WeekDay = styled.div`
  flex: 1 0;
  display: inline-block;
  border: 1px solid rgba(0,0,0,0);
  margin: -1px 0 0 -1px;
  height: 36px;
  line-height: 36px;
  font-size: 11px;
  width: 36px;
`;

export const CalendarRow = styled.div`
  display: flex;
  .cell {
    border: 1px solid grey;
    background-color: #fff;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  .cell-inactive {
    border: 1px solid grey;
    background-color: #fff;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell:hover {
    background: #00aa6c;
    color: #fff;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell-today {
    border: 1px solid grey;
    background-color: #fff;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 600;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell-today:hover {
    background: #00aa6c;
    color: #fff;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell-disabled {
    background-color: white;
    color: white;
    pointer-events: none;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell-checkIn {
    border: 1px solid grey;
    background-color: #00aa6c;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .cell-checkOut {
    border: 1px solid grey;
    background-color: #cc0202;
    flex: 1 0;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    vertical-align: top;
    position: relative;
    z-index: 1;
    border: 2px solid rgba(0,0,0,0);
    margin: -2px 0 0 -2px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  `;

export const CalendarCell = styled.div`
  flex: 1 0;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  vertical-align: top;
  position: relative;
  z-index: 1;
  border: 2px solid rgba(0,0,0,0);
  margin: -2px 0 0 -2px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

export const CalendarAverageSection = styled.div`
  padding: 16px 0;
  font-size: 12px;
  border: solid #e0e0e0;
  border-width: 1px 0 0;
  color: #4a4a4a;

  margin-right: 15px;
  margin-left: 15px;
  position:absolute;
  bottom:0;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const CalendarAverageSectionSpan = styled.span`
  color: #4a4a4a;
  font-size: 12px;
`;

export const CalendarAverageSectionMsgSpan = styled.span`
  color: red;
  font-size: 12px;
`;


