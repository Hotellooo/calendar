import React from 'react';
import ReactDOM from 'react-dom';
import getBestOrRestDeals from '../lib/getBestOrRestDeals.js';
import styled from 'styled-components';
import {AllDealsWrapper, AllDealsMainDiv, AllDealsBottomDiv, AllDealsEntityOuter, AllDealsEntityInner, AllDealsEntityServiceSpan, AllDealsEntityPriceSpan, AllDealsEntityServiceNameSpan, AllDealsEntityServiceIconSpan, ViewAllWrapper, ViewAllDiv, ViewAllPortalWrapper, ViewAllPortal, ViewAllPortalLine, ViewPortalLineDiv, ViewPortalLineNameSpan, ViewPortalLinePriceSpan, ViewAllPortalLineIconSpan, ViewAllPortalLineInnerDiv, PopupWrapper, PopupTextDiv } from './AllDealsStyles.js';
import AllDealsStyles from './AllDealsStyles.js';
import { faCaretDown, faExternalLinkAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AllDeals extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isClicked: false,
      allDealsView: false,
      popUpVis: false
    };
    this.renderFour = this.renderFour.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderAllDealsBasics = this.renderAllDealsBasics.bind(this);
    this.renderPrice = this.renderPrice.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  renderFour (hotels) {
    const displaySix = [];
    if (hotels.length === 0) {
      return ( <div>Loading data...</div>);
    } else {
      let sorted = getBestOrRestDeals(hotels, 'getRest');
      for (var i = 0; i < sorted.length; i++) {
        displaySix.push(

          <AllDealsEntityOuter key={i}>
            <AllDealsEntityInner>

              <AllDealsEntityServiceSpan>
                <AllDealsEntityServiceNameSpan>
                  {sorted[i].serviceName}
                </AllDealsEntityServiceNameSpan>

                <AllDealsEntityServiceIconSpan>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='xs'/>
                </AllDealsEntityServiceIconSpan>
              </AllDealsEntityServiceSpan>


              <AllDealsEntityPriceSpan>${sorted[i].price}</AllDealsEntityPriceSpan>


            </AllDealsEntityInner>
          </AllDealsEntityOuter>
        );
      }
      return displaySix.slice(0, 4);
    }
  }

  renderPrice (price) {
    return price ? `$${price}` : <FontAwesomeIcon icon={faTimesCircle} size='sm' color='grey'/>
  }

  togglePopup () {
    this.setState({
      popUpVis: !this.state.popUpVis
    })
  }

  onClickHandler () {
    this.setState({
      isClicked: !this.state.isClicked,
      allDealsView: !this.state.allDealsView
    });
  }

  renderPopupPortal (flag) {
    return flag ? ReactDOM.createPortal(
    <PopupWrapper>
      <PopupTextDiv>
        Prices are the average nightly price provided by our partners and may not include all taxes and fees. Taxes and fees that are shown are estimates only. Please see our partners for more details.
      </PopupTextDiv>
    </PopupWrapper>
    ,
    document.getElementById('popup')) : null
  }

  renderAll () {
    let hotels = this.props.currentHotel;
    if (hotels.length === 0 || !hotels) {
      return (<div>Loading...</div>);
    } else {
      let rates = [];
      for (var i = hotels[0].prices.length - 1; i >= 0; i--) {
        rates.push(

          <div key={i}>
            <ViewPortalLineDiv>
              <ViewAllPortalLineInnerDiv>

                <ViewPortalLineNameSpan>
                  {hotels[0].prices[i].serviceName + ' '}
                </ViewPortalLineNameSpan>

                <ViewAllPortalLineIconSpan>
                  <FontAwesomeIcon icon={faExternalLinkAlt} size='xs'/>
                </ViewAllPortalLineIconSpan>
              </ViewAllPortalLineInnerDiv>

              <ViewPortalLinePriceSpan>
              {this.renderPrice(hotels[0].prices[i].price)}
              </ViewPortalLinePriceSpan>

            </ViewPortalLineDiv>

          </div>

        );
      }
      return ReactDOM.createPortal(
        <ViewAllPortalWrapper>
          <ViewAllPortal>
            <ViewAllPortalLine>
              <div>
                {rates}
              </div>
            </ViewAllPortalLine>
          </ViewAllPortal>
        </ViewAllPortalWrapper>
        ,
        document.getElementById('viewAll'));
    }
  }

  renderAllDealsBasics () {
    return (

      <AllDealsWrapper>

        <AllDealsMainDiv>
          {this.renderFour(this.props.currentHotel)}
        </AllDealsMainDiv>

        <ViewAllWrapper onClick={this.onClickHandler}>
          <ViewAllDiv>View all 10 deals
            <FontAwesomeIcon icon={faCaretDown}/>

          </ViewAllDiv>
        </ViewAllWrapper>

        <AllDealsBottomDiv onMouseOver={this.togglePopup} onMouseOut={this.togglePopup}>
        Prices are the average nightly price provided by our partners and may not include all taxes and fees. Taxes and fees that are shown are estimates only. Please see our partners for more details.
        </AllDealsBottomDiv>
      </AllDealsWrapper>

    );
  }

  renderAllDeals () {
    if (!this.state.allDealsView) {
      return (this.renderAllDealsBasics());
    }

    if (this.state.allDealsView) {
      return (
        <div>
          {this.renderAllDealsBasics()}
          {this.renderAll()}
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.renderAllDeals()}
        {this.renderPopupPortal(this.state.popUpVis)}
      </div>
    );
  }
}

export default AllDeals;