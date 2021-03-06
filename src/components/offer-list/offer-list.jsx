import React, {PureComponent} from 'react';
import OfferCard from '../offer-card/offer-card';
import PropTypes from 'prop-types';


class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };

    this._handleOfferHover = this._handleOfferHover.bind(this);
  }

  _handleOfferHover(id) {
    this.setState({
      activeOffer: id,
    });
  }

  render() {
    const {offers, onOfferCardClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCard
            onOfferCardClick={onOfferCardClick}
            onHover={this._handleOfferHover}
            offer={offer}
            key={offer.id}
          />
        )}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferCardClick: PropTypes.func.isRequired,
};


export default OfferList;
