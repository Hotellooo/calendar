import React from 'react';
import Children from './Children.jsx';
import styled from 'styled-components';
import {GuestsWrapper, GuestsInnerLine, GuestsInnerLineConfig, GuestsInnerLineConfigButton, GuestsInnerLineConfigField, GuestsInnerLineConfigButtonSpan, GuestsInnerLineLabel, GuestsInnerLineLabelIcon, CloseButton, UpdateButtonDiv, UpdateButton} from './GuestsStyles.js';

import { faMinus, faPlus, faBed} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Guests extends React.Component {
  constructor () {
    super();

    this.state = {
      roomsNumber: 1,
      adultsNumber: 2,
      childrenNumber: 1
    };
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleMinusClick (event) {
    const id = event.currentTarget.dataset.id;
    if (id === '0' && this.state.roomsNumber) {
      this.setState({
        roomsNumber: --this.state.roomsNumber
      });
    }
    if (id === '1' && this.state.adultsNumber) {
      this.setState({
        adultsNumber: --this.state.adultsNumber
      });
    }
    if (id === '2' && this.state.childrenNumber) {
      this.setState({
        childrenNumber: --this.state.childrenNumber
      });
    }
  }

  handlePlusClick (event) {
    const id = event.currentTarget.dataset.id;
    if (id === '0') {
      this.setState({
        roomsNumber: ++this.state.roomsNumber
      });
    }
    if (id === '1') {
      this.setState({
        adultsNumber: ++this.state.adultsNumber
      });
    }
    if (id === '2') {
      this.setState({
        childrenNumber: ++this.state.childrenNumber
      });
    }
  }

  handleUpdateClick () {
    let guestsTotal = this.state.adultsNumber + this.state.childrenNumber;
    let config = ({
      'guestsNumber': guestsTotal,
      'roomsNumber': this.state.roomsNumber,
      'adultsNumber': this.state.adultsNumber,
      'childrenNumber': this.state.childrenNumber
    });
    this.props.getUpdatedData(config);
    this.props.updateGuestPickerInfo(config)
  }

  render () {
    let links = {'state': ['roomsNumber', 'adultsNumber', 'childrenNumber'], 'labels': ['Rooms', 'Adults', 'Children']};
    const lines = [];
    for (let i = 0; i < 3; i++) {
      lines.push(

        <GuestsInnerLine key={i}>
          <GuestsInnerLineConfig>

            <GuestsInnerLineConfigButton data-id={i} onClick={this.handleMinusClick}>
              <GuestsInnerLineConfigButtonSpan>
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </GuestsInnerLineConfigButtonSpan>
            </GuestsInnerLineConfigButton>

            <GuestsInnerLineConfigField>{this.state[links.state[i]]}</GuestsInnerLineConfigField>

            <GuestsInnerLineConfigButton data-id={i} onClick={this.handlePlusClick}>
              <GuestsInnerLineConfigButtonSpan>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </GuestsInnerLineConfigButtonSpan>
            </GuestsInnerLineConfigButton>
          </GuestsInnerLineConfig>


          <GuestsInnerLineLabel>
            <GuestsInnerLineLabelIcon>
              <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            </GuestsInnerLineLabelIcon>
            {links.labels[i]}
          </GuestsInnerLineLabel>


        </GuestsInnerLine>

      );
    }
    return (
      <GuestsWrapper>
        <CloseButton onClick={this.props.changeGuestsView}></CloseButton>
        {lines}
        <Children childrenNumber={this.state.childrenNumber}/>
        <UpdateButtonDiv>
          <UpdateButton onClick={this.handleUpdateClick}>Update</UpdateButton>
        </UpdateButtonDiv>
      </GuestsWrapper>
    );
  }
}

export default Guests;