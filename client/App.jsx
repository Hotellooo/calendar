import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import Guests from './components/Guests.jsx';
import BestDeals from './components/BestDeals.jsx';
import AllDeals from './components/AllDeals.jsx';
import moment from 'moment';
import getDataFromServer from './lib/getDataFromServer.js';
import getUpdatedDataFromServer from './lib/getUpdatedDataFromServer.js';
import styled from 'styled-components';
import {MainWrapper, AppWrapper, HeaderWrapper, HeaderTextBlock, HeaderIconSpan, HeaderTextSpan, CalendarGuestsWrapper, DatePickerWrapper, GuestsWrapper, GuestsButton, GuestsButtonDiv, GuestsButtonIconSpan, GuestsButtonPickerSpan, GuestsButtonPickerSpanGuestsSpan, GuestsButtonPickerSpanGuestsConfigSpan, GuestsButtonPickerSpanGuestsConfigInnerSpan, DatePickerButton, DatePickerButtonDiv, DatePickerButtonDivIconSpan, DatePickerButtonDivFieldSpan, DatePickerButtonDivFieldSpanCheckIn, DatePickerButtonDivFieldSpanDate,
  BestDealsWrapper, DealsWrapper} from './AppStyles.js';

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      calendarView: false,
      guestsView: false,
      currentHotel: [],
      checkIn: false,
      checkOut: false,
      msg: '',
      userConfig: {
        roomsNumber: 1,
        adultsNumber: 2,
        childrenNumber: 1
      }
    };
    this.getData = this.getData.bind(this);
    this.getUpdatedData = this.getUpdatedData.bind(this);
    this.calculateAvrgRate = this.calculateAvrgRate.bind(this);
    this.renderCalendar = this.renderCalendar.bind(this);
    this.changeCalendarView = this.changeCalendarView.bind(this);
    this.renderGuests = this.renderGuests.bind(this);
    this.changeGuestsView = this.changeGuestsView.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.displayNotAvailableMsg = this.displayNotAvailableMsg.bind(this);
    this.updateGuestPickerInfo = this.updateGuestPickerInfo.bind(this);
  }

  componentDidMount () {
    this.getData(60);
  }

  getData (term) {
    const response = getDataFromServer(term);
    response.then((hotel) => {
      this.setState({
        currentHotel: hotel
      });
    });
  }

  getUpdatedData (...args) {
    let query = [...args][0];
    query.id = this.state.currentHotel[0].id;
    if (query.checkIn) {
      this.setState({
        checkIn: query.checkIn,
        checkOut: query.checkOut
      });
    }
    if (!query.guestsNumber) query.guestsNumber = 2;
    if (!query.roomsNumber) query.roomsNumber = 1;
    if (!query.checkIn) {
      if (!this.state.checkIn) query.checkIn = moment().format('YYYY-MM-DD');
      else query.checkIn = this.state.checkIn;
    }
    if (!query.checkOut) {
      if (!this.state.checkOut) query.checkOut = moment().add(1, 'day').format('YYYY-MM-DD');
      else query.checkOut = this.state.checkOut;
    }
    getUpdatedDataFromServer(query, this.handleResponse);
  }

  handleResponse (hotel) {
    if (hotel[0]['err_msg']) {
      this.setState({ msg: hotel[0]['err_msg'] })
    } else {
      if (this.state.calendarView) {
        this.setState({
          currentHotel: hotel,
          calendarView: false,
          guestsView: !this.state.guestsView
        });
      } else {
        this.setState({
          currentHotel: hotel,
          guestsView: false
        });
      }
    }
  }

  displayNotAvailableMsg () {
    return this.state.msg.length ? this.state.msg : null
  }

  updateGuestPickerInfo ({adultsNumber, childrenNumber, roomsNumber}) {
    this.setState({
      userConfig: { roomsNumber, adultsNumber, childrenNumber }
    })
  }

  calculateAvrgRate () {
    if (!this.state.currentHotel[0]) {
      return 'Loading...';
    } else {
      const prices = [];
      this.state.currentHotel[0].prices.forEach((elem) => {
        if (elem.price !== 0) prices.push(elem.price);
      });
      return `$${Math.min(...prices)} - $${Math.max(...prices)}`;
    }
  }

  changeCalendarView () {
    this.setState({
      calendarView: !this.state.calendarView
    });
  }

  renderCalendarBasics () {
    return (
      <div>
        <DatePickerButton onClick={this.changeCalendarView}>
          <DatePickerButtonDiv color="green">

            <DatePickerButtonDivIconSpan>
              <FontAwesomeIcon icon={faCalendarAlt}/>
            </DatePickerButtonDivIconSpan>

            <DatePickerButtonDivFieldSpan>
              <DatePickerButtonDivFieldSpanCheckIn>
                  Check In
              </DatePickerButtonDivFieldSpanCheckIn>
              <DatePickerButtonDivFieldSpanDate>
                <span>{moment().format('ddd')}, {moment().format('MM/DD/YYYY')}</span>
              </DatePickerButtonDivFieldSpanDate>
            </DatePickerButtonDivFieldSpan>
          </DatePickerButtonDiv>
        </DatePickerButton>


        <DatePickerButton onClick={this.changeCalendarView}>
          <DatePickerButtonDiv color="red">
            <DatePickerButtonDivIconSpan>
              <FontAwesomeIcon icon={faCalendarAlt}/>
            </DatePickerButtonDivIconSpan>
            <DatePickerButtonDivFieldSpan>
              <DatePickerButtonDivFieldSpanCheckIn>
                  Check Out
              </DatePickerButtonDivFieldSpanCheckIn>
              <DatePickerButtonDivFieldSpanDate>
                <span>{moment().add(1, 'day').format('ddd')}, {moment().add(1, 'day').format('MM/DD/YYYY')}</span>
              </DatePickerButtonDivFieldSpanDate>
            </DatePickerButtonDivFieldSpan>
          </DatePickerButtonDiv>
        </DatePickerButton>
      </div>
    );
  }

  renderCalendarPortal () {
    return ReactDOM.createPortal(
      <Calendar
        getUpdatedData={this.getUpdatedData}
        calculateAvrgRate={this.calculateAvrgRate}
        displayNotAvailableMsg={this.displayNotAvailableMsg}
        changeCalendarView={this.changeCalendarView}
      />,
      document.getElementById('calendar'));
  }

  renderCalendar () {
    return !this.state.calendarView ? this.renderCalendarBasics() :
    (<div>{this.renderCalendarBasics()}{this.renderCalendarPortal()}</div>)
  }

  changeGuestsView () {
    this.setState({
      guestsView: !this.state.guestsView
    });
  }

  renderGuestsBasics () {
    return (
      <div>
      <GuestsButton onClick={this.changeGuestsView}>
        <GuestsButtonDiv>
          <GuestsButtonIconSpan></GuestsButtonIconSpan>

          <GuestsButtonPickerSpan>

            <GuestsButtonPickerSpanGuestsSpan>Guests
            </GuestsButtonPickerSpanGuestsSpan>

            <GuestsButtonPickerSpanGuestsConfigSpan>
              <span>
                <GuestsButtonPickerSpanGuestsConfigInnerSpan>
                  {this.state.userConfig.roomsNumber}
                  {this.state.userConfig.roomsNumber > 1 ? ' rooms, ' : ' room, '}
                </GuestsButtonPickerSpanGuestsConfigInnerSpan>

                <GuestsButtonPickerSpanGuestsConfigInnerSpan>
                  {this.state.userConfig.adultsNumber}
                  {this.state.userConfig.adultsNumber > 1 ? ' adults, ' : ' adult, '}
                </GuestsButtonPickerSpanGuestsConfigInnerSpan>

                <GuestsButtonPickerSpanGuestsConfigInnerSpan>
                  {this.state.userConfig.childrenNumber}
                  {this.state.userConfig.childrenNumber > 1 ? ' children' : ' child'}
                </GuestsButtonPickerSpanGuestsConfigInnerSpan>
              </span>
            </GuestsButtonPickerSpanGuestsConfigSpan>

          </GuestsButtonPickerSpan>

        </GuestsButtonDiv>
      </GuestsButton>
      </div>
    );
  }

  renderGuests () {
    if (!this.state.guestsView) {
      return this.renderGuestsBasics();
    }
    if (this.state.guestsView) {
      return (
        <div>
          {this.renderGuestsBasics()}
          {this.renderGuestsPortal()}
        </div>

      );
    }
  }

  renderGuestsPortal () {
    return ReactDOM.createPortal(
      <Guests
        getUpdatedData={this.getUpdatedData}
        changeGuestsView={this.changeGuestsView}
        updateGuestPickerInfo={this.updateGuestPickerInfo}
      />,
      document.getElementById('guests')
    );
  }

  render () {

    return (
      <MainWrapper>
        <AppWrapper>

          <HeaderWrapper>
            <HeaderTextBlock>
              <HeaderIconSpan>

              </HeaderIconSpan>
              <HeaderTextSpan>
                6 people are viewing this hotel
              </HeaderTextSpan>
            </HeaderTextBlock>
          </HeaderWrapper>


          <CalendarGuestsWrapper>

            <DatePickerWrapper>
              {this.renderCalendar()}
            </DatePickerWrapper>

            <GuestsWrapper>
              {this.renderGuests()}
            </GuestsWrapper>

          </CalendarGuestsWrapper>


          <DealsWrapper>
            <BestDeals currentHotel={this.state.currentHotel}/>
            <AllDeals currentHotel={this.state.currentHotel}/>
          </DealsWrapper>

        </AppWrapper>

      </MainWrapper>
    );
  }
}

export default App;