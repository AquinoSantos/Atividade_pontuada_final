import { useState } from "react";

function FaleConosco() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!form.nome || !form.email || !form.telefone || !form.mensagem) {
      setStatus("Preencha todos os campos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(data.message);
        setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        setStatus(data.error);
      }
    } catch (err) {
      setStatus("Erro ao enviar formulário.");
    }
  };

  return (
  <div className="page">
    <h1>Fale Conosco</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
      />
      <textarea
        name="mensagem"
        placeholder="Mensagem"
        value={form.mensagem}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
    {status && <p>{status}</p>}
  </div>
);
}

export default FaleConosco;