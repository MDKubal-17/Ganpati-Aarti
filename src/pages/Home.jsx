import Navbar from "../components/Navbar";
import AartiCard from "../components/AartiCard";
import aartis from "../data/aartis";

function Home() {
  return (
    <div className="app" id="home">

      <Navbar />

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-small">
            🪔 भक्ती • श्रद्धा • परंपरा
          </span>

          <h1>
            आरती संग्रह
          </h1>

          <p>
            सर्व देवतांच्या आरत्या
            <br />
            एका सुंदर संग्रहात
          </p>

          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="आरती शोधा..."
            />
          </div>

        </div>

        <div className="hero-symbol">
          ॐ
        </div>

      </section>


      {/* Popular Aartis */}
      <section className="aartis-section" id="aartis">

        <div className="section-heading">

          <div>
            <span>आजची भक्ती</span>
            <h2>प्रमुख आरत्या</h2>
          </div>

          <button className="view-all">
            सर्व पहा →
          </button>

        </div>


        <div className="aarti-grid">

          {aartis.map((aarti) => (
            <AartiCard
              key={aarti.id}
              aarti={aarti}
            />
          ))}

        </div>

      </section>


      {/* Quote */}
      <section className="quote-section">

        <div className="quote-symbol">
          ॐ
        </div>

        <p>
          "भक्तीमध्ये शक्ती आहे,
          <br />
          आणि आरतीमध्ये त्या भक्तीचा सुंदर भाव आहे."
        </p>

      </section>


      <footer>
        <p>🪔 आरती संग्रह</p>
        <span>श्रद्धा • भक्ती • परंपरा</span>
      </footer>

    </div>
  );
}

export default Home;