import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer} = this.props;
    const {onHover} = this.props;
    const {onOfferCardClick} = this.props;

    return (
      <article
        onMouseEnter={() => {
          onHover(offer.id);
        }}
        onClick={onOfferCardClick}
        className="cities__place-card place-card"
      >
        {offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.rating * 20 + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  onOfferCardClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    bedroomsCount: PropTypes.string.isRequired,
    maxAdults: PropTypes.string.isRequired,
    insideItems: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};


export default OfferCard;
