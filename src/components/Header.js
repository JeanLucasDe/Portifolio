import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1>Jean Lucas</h1>
      <nav>
        <ul className="nav_links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;