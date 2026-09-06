import { Link } from "react-router-dom";

function AartiCard({ aarti, isFavorite, onFavorite }) {
  return (
    <div className="aarti-card">

      <div className="card-image">

        <img
          src={aarti.image}
          alt={aarti.deity}
        />

        <button
          className={`card-favorite ${
            isFavorite ? "favorite-active" : ""
          }`}
          onClick={onFavorite}
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>


      <div className="card-content">

        <p className="deity-name">
          {aarti.deity}
        </p>

        <h3>{aarti.title}</h3>

        <Link
          to={`/aarti/${aarti.id}`}
          className="read-button"
        >
          वाचा <span>→</span>
        </Link>

      </div>

    </div>
  );
}

export default AartiCard;
