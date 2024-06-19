import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/card/${id}`}>
      <div className="home-card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
