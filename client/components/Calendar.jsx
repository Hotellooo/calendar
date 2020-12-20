import React from 'react';
import moment from 'moment';
import { CalendarPortalWrapper, CalendarHeader, CalendarLegendDiv, CalendarLegendSpan, CheckInContainer, CheckInWrapper, CalendarMonths, CalendarNavBar, CalendarNavBarButton, CalendarNavBarButtonIcon, CalendarGrid, CalendarCaption, CalendarWeekdays, CalendarBody, WeekDaysRow, WeekDay, CalendarRow, CalendarCell, CalendarAverageSection, CalendarAverageSectionSpan, CalendarMonthsDiv, CalendarAverageSectionMsgSpan, CalendarHeaderTop, CalendarHeaderTopText, CloseButton

} from './CalendarStyles.js';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      now: moment(),
      currentMonth: moment(),
      selectedDate: moment(),
      nextMonth: moment().add(1, 'month'),
      checkIn: false,
      checkOut: false,
      clickCounter: 0,
      averageRate: ''
    }
    this.onDateClick = this.onDateClick.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.checkState = this.checkState.bind(this);
  }

  renderNavbar () {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className="navbar-container">
        <div className="col">
          <button type="button" onClick={this.prevMonth}>previous</button>
        </div>

        <div className="col">
          <span>
            {moment(this.state.currentMonth).format(dateFormat)}
          </span>
        </div>
        <div className="col">
          <span>
            {moment(this.state.nextMonth).format(dateFormat)}
          </span>
        </div>

        <div className="col">
          <button type="button" onClick={this.nextMonth}>next</button>
        </div>
      </div>
    );
  }

  renderWeekDays (term) {
    const dateFormat = 'ddd';
    const days = [];
    let startDate;
    term === this.state.currentMonth ? startDate = moment(this.state.currentMonth).startOf('week') : startDate = moment(this.state.nextMonth).startOf('week');
    for (var i = 0; i < 7; i++) {
      days.push(
        <WeekDay key={i}>{moment(startDate).add(i, 'days').format(dateFormat).toUpperCase()}</WeekDay>
      );
    }
    return days;
  }

  renderCells (term) {
    let currentMonth;
    if (term === this.state.currentMonth) currentMonth = this.state.currentMonth;
    else currentMonth = this.state.nextMonth;

    const selectedDate = this.state.selectedDate;
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd = moment(currentMonth).endOf('month');
    const startDate = moment(monthStart).startOf('week');
    const endDate = moment(monthEnd).endOf('week');
    const today = moment().startOf('day');
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format('D');
        const dayCopy = day;
        days.push(
          <div
            className={`cell${
              moment(day).isSame(moment(), 'day') ? '-today' :
                !moment(day).isSame(monthStart, 'month') ? '-disabled' :
                  moment(day).isBefore(today) ? '-inactive' :
                    this.state.checkIn && moment(day).isSame(this.state.checkIn, 'day') ? '-checkIn' :
                      this.state.checkOut && moment(day).isSame(this.state.checkOut, 'day') ? '-checkOut' : ''
            }`}
            key={day}
            onClick={ ()=>{ this.onDateClick(dayCopy); }}
          ><span className="number">{formattedDate}</span>
          </div>
        );
        day = moment(day).add(1, 'day');
      }
      rows.push(
        <CalendarRow key={day}>
          {days}
        </CalendarRow>
      );
      days = [];
    }
    return rows;
  }

  onDateClick (day) {
    if (!this.state.clickCounter) {
      this.setState({
        selectedDate: day,
        checkIn: day,
        clickCounter: 1
      }, () => { this.checkState(); });
    } else {
      if (!moment(day).isBefore(this.state.checkIn)) {
        this.setState({
          selectedDate: day,
          checkOut: day,
          clickCounter: 0
        }, () => { this.checkState(); });
      }
    }
  }

  checkState() {
    if (this.state.checkIn && this.state.checkOut) {
      const dates = {checkIn: moment(this.state.checkIn).format('YYYY-MM-DD'), checkOut: moment(this.state.checkOut).format('YYYY-MM-DD')};
      this.props.getUpdatedData(dates);
      this.setState({
        checkIn: false,
        checkOut: false
      });
    }
  }

  nextMonth () {
    this.setState({
      currentMonth: moment(this.state.currentMonth).add(1, 'month'),
      nextMonth: moment(this.state.nextMonth).add(1, 'month')
    });
  }

  prevMonth () {
    this.setState({
      currentMonth: moment(this.state.currentMonth).subtract(1, 'month'),
      nextMonth: moment(this.state.nextMonth).subtract(1, 'month')
    });
  }

  render () {
    return (
      <CalendarPortalWrapper>

        <CalendarHeader>

          <CalendarHeaderTop>
            <CalendarHeaderTopText>Select a date to continue</CalendarHeaderTopText>
            <CloseButton onClick={this.props.changeCalendarView}></CloseButton>
          </CalendarHeaderTop>

          <CalendarLegendDiv>
            <CalendarLegendSpan></CalendarLegendSpan>Lowest priced dates
          </CalendarLegendDiv>
        </CalendarHeader>

        <CheckInContainer>
          <CheckInWrapper>
            <CalendarNavBar>

              <CalendarNavBarButton onClick={this.prevMonth}>
                <CalendarNavBarButtonIcon>
                  <FontAwesomeIcon icon={faChevronLeft}/>
                </CalendarNavBarButtonIcon>
              </CalendarNavBarButton>

              <CalendarNavBarButton onClick={this.nextMonth}>
                <CalendarNavBarButtonIcon>
                  <FontAwesomeIcon icon={faChevronRight}/>
                </CalendarNavBarButtonIcon>
              </CalendarNavBarButton>
            </CalendarNavBar>

            <CalendarMonths>
              <CalendarMonthsDiv>
                <CalendarGrid>
                  <CalendarCaption>
                    <div>{moment(this.state.currentMonth).format('MMMM yyyy')}</div>
                  </CalendarCaption>
                  <CalendarWeekdays>
                    <WeekDaysRow>
                      {this.renderWeekDays(this.state.currentMonth)}
                    </WeekDaysRow>
                  </CalendarWeekdays>

                  <CalendarBody>
                    {this.renderCells(this.state.currentMonth)}
                  </CalendarBody>
                </CalendarGrid>


                <CalendarGrid>
                  <CalendarCaption>
                    <div>{moment(this.state.nextMonth).format('MMMM yyyy')}</div>
                  </CalendarCaption>
                  <CalendarWeekdays>
                    <WeekDaysRow>
                      {this.renderWeekDays(this.state.nextMonth)}
                    </WeekDaysRow>
                  </CalendarWeekdays>
                  <CalendarBody>
                    {this.renderCells(this.state.nextMonth)}
                  </CalendarBody>
                </CalendarGrid>
              </CalendarMonthsDiv>
            </CalendarMonths>
          </CheckInWrapper>
        </CheckInContainer>

        <CalendarAverageSection>
          <CalendarAverageSectionSpan>
          Average daily rates: {this.props.calculateAvrgRate()}
          </CalendarAverageSectionSpan>
          <CalendarAverageSectionMsgSpan>
          {this.props.displayNotAvailableMsg()}
          </CalendarAverageSectionMsgSpan>
        </CalendarAverageSection>

      </CalendarPortalWrapper>
    );
  }
}

export default Calendar;
