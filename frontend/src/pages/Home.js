// src/pages/Home.js
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Farmácia Senaizinho</h1>
        <p>Sua saúde é a nossa prioridade 💚💊</p>

        <div className="hero-buttons">
          <Link to="/servicos" className="btn btn-primary">
            Nossos Serviços
          </Link>
          <Link to="/fale-conosco" className="btn btn-secondary">
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;