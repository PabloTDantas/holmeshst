import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
const route = Router();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
route.get('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const response = await axios.get(` https://api-busca.herokuapp.com/api/puxar?type=cpf3&q=${cpf}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/cpf2/:cpf2', async (req, res) => {
  try {
    const cpf2 = req.params.cpf2;
    const response = await axios.get(`https://api.searchlock.me/credilink?token=h99GH8h9HGHGh76r&tipo=cpf&cpf=${cpf2} `);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/score/:score', async (req, res) => {
  try {
    const score = req.params.score;
    const response = await axios.get(` https://api-busca.herokuapp.com/api/score?query=${score}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/cnpj/:cnpj', async (req, res) => {
  try {
    const cnpj = req.params.cnpj;
    const response = await axios.get(`https://api-busca.herokuapp.com/api/puxar?type=cnpj&q=${cnpj}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/nome/:nome', async (req, res) => {
  try {
    const nome = req.params.nome;
    const response = await axios.get(`https://api-busca.herokuapp.com/api/puxar?type=nome&q=${nome}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/placa/:placa', async (req, res) => {
  try {
    const placa = req.params.placa;
    const response = await axios.get(`https://api-busca.herokuapp.com/api/puxar?type=placa&q=${placa}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/telefone/:telefone', async (req, res) => {
  try {
    const telefone = req.params.telefone;
    const response = await axios.get(`https://api-busca.herokuapp.com/api/puxar?type=telefone&q=${telefone}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


app.use('/api', route);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
