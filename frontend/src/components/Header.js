import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/servicos">Serviços</Link> | 
        <Link to="/sobre-nos">Sobre Nós</Link> | 
        <Link to="/fale-conosco">Fale Conosco</Link>
      </nav>
    </header>
  );
}

export default Header;