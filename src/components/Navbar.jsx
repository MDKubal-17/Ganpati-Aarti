function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🪔 <span>आरती संग्रह</span>
      </div>

      <div className="nav-links">
        <a href="#home">मुख्यपृष्ठ</a>
        <a href="#aartis">आरत्या</a>
        <a href="#favorites">आवडत्या</a>
      </div>
    </nav>
  );
}

export default Navbar;