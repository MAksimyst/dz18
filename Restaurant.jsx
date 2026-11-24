import PropTypes from "prop-types";

function Restaurant({ name, address, rating, cuisine, image }) {
  return (
    <div>
      <img src={image} alt={name} width="250" />
      <h2>{name}</h2>
      <p>Адреса: {address}</p>
      <p>Рейтинг: {rating} / 5</p>
      <p>Тип кухні: {cuisine}</p>
    </div>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Restaurant;
