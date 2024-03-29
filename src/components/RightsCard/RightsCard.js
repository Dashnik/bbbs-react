import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { onLinkNav } from '../../utils/utils';

function RightsCard({
  card,
  onClickCard,
}) {
  function handleClick() {
    onClickCard(card);
    onLinkNav();
  }
  return (
    <>
      <Link to={`/rights/${card.id}`} onClick={handleClick} className="rights__link">
        <article className="catalog-card card-pagination card-pagination_type_shapes">
          <div className={`card card_color_${card.color} card_form_${card.form} rights__card`}>
            <div className="rights__link">
              <h2 className="section-title">
                {card.title}
              </h2>
              {card.tags.map((tag) => (
                <p key={tag.id} className="rubric rights__rubric">{tag.name}</p>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

RightsCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, slug: PropTypes.string })),
  }).isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default RightsCard;
