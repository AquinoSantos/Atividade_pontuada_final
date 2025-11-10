import express from "express";
import Contato from "../models/contato.js";

const router = express.Router();

router.post("/contatos", async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || !email || !telefone || !mensagem) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const novoContato = await Contato.create({ nome, email, telefone, mensagem });
    res.status(201).json({ message: "Contato enviado com sucesso!", contato: novoContato });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar contato" });
  }
});

export default router;