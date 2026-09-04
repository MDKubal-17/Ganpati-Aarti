import { Link, useParams } from "react-router-dom";
import aartis from "../data/aartis";

function AartiDetails() {
  const { id } = useParams();

  const aarti = aartis.find(
    (item) => item.id === Number(id)
  );

  if (!aarti) {
    return (
      <div className="not-found">
        <h2>आरती सापडली नाही 🙏</h2>
        <Link to="/">← मुख्यपृष्ठावर जा</Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* Header */}
      <header className="details-header">
        <Link to="/" className="back-button">
          ← परत
        </Link>

        <div className="details-logo">
          🪔 आरती संग्रह
        </div>

        <button className="favorite-button">
          ♡
        </button>
      </header>


      {/* Aarti Heading */}
      <section className="aarti-heading">

        <div className="details-image">
          <img
            src={aarti.image}
            alt={aarti.deity}
          />
        </div>

        <div>
          <p>{aarti.deity}</p>

          <h1>{aarti.title}</h1>

          <span>{aarti.category}</span>
        </div>

      </section>


      {/* Lyrics */}
      {/* Lyrics */}
    <main className="lyrics-container">
    <div className="lyrics-card">

        <h2>आरती</h2>

        <div className="lyrics">
        {aarti.lyrics.map((stanza, index) => (
            <p key={index}>
            {stanza.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                {line}
                <br />
                </span>
            ))}
            </p>
        ))}
        </div>

    </div>
    </main>

    </div>
  );
}

export default AartiDetails;