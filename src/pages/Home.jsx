import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AartiCard from "../components/AartiCard";
import aartis from "../data/aartis";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("aartiFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "aartiFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  const categories = [
    "All",
    ...new Set(aartis.map((aarti) => aarti.category)),
  ];

  const filteredAartis = aartis.filter((aarti) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      aarti.deity.toLowerCase().includes(searchText) ||
      aarti.title.toLowerCase().includes(searchText) ||
      aarti.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || aarti.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app" id="home">

      <Navbar />

      <section className="hero">
        <div className="hero-content">

          <span className="hero-small">
            🪔 भक्ती • श्रद्धा • परंपरा
          </span>

          <h1>आरती संग्रह</h1>

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="hero-symbol">
          ॐ
        </div>
      </section>


      <section className="aartis-section" id="aartis">

        <div className="section-heading">
          <div>
            <span>आजची भक्ती</span>
            <h2>प्रमुख आरत्या</h2>
          </div>
        </div>


        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>


        {filteredAartis.length > 0 ? (

          <div className="aarti-grid">

            {filteredAartis.map((aarti) => (
              <AartiCard
                key={aarti.id}
                aarti={aarti}
                isFavorite={favorites.includes(aarti.id)}
                onFavorite={() => toggleFavorite(aarti.id)}
              />
            ))}

          </div>

        ) : (

          <div className="no-results">
            <div>🪔</div>
            <h3>आरती सापडली नाही</h3>
            <p>दुसरे नाव किंवा आरती शोधून पहा.</p>
          </div>

        )}

      </section>


      <section className="quote-section">
        <div className="quote-symbol">ॐ</div>

        <p>
          "भक्तीमध्ये शक्ती आहे,
          <br />
          आणि आरतीमध्ये त्या भक्तीचा सुंदर भाव आहे."
        </p>
      </section>


      <footer>
        <p>By Maithilee Kubal</p>
        <span>UMIT, SNDT University</span>
      </footer>

    </div>
  );
}

export default Home;
