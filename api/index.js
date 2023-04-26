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
    const response = await axios.get(` https://lordealeky.tk/api/puxar?token=Teste123&type=cpf3&q=${cpf}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/rg/:rg', async (req, res) => {
  try {
    const rg = req.params.rg;
    const response = await axios.get(` https://wlrd.live/rg/${rg}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZG9wYXJpbyIsImlhdCI6MTY4MjQ3OTYxOSwiZXhwIjoxNjgyNTMwMDE5fQ.CXBWxp8kFNTr1h2748khotkfPy3uXDRSBBuDDM1ZHWA
`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/email/:email', async (req, res) => {
  try {
    const email= req.params.email;
    const response = await axios.get(` https://wlrd.live/email/${email}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZG9wYXJpbyIsImlhdCI6MTY4MjQ3OTYxOSwiZXhwIjoxNjgyNTMwMDE5fQ.CXBWxp8kFNTr1h2748khotkfPy3uXDRSBBuDDM1ZHWA`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/covid/:covid', async (req, res) => {
  try {
    const covid= req.params.covid;
    const response = await axios.get(` https://wlrd.live/covid/${covid}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZG9wYXJpbyIsImlhdCI6MTY4MjQ3OTYxOSwiZXhwIjoxNjgyNTMwMDE5fQ.CXBWxp8kFNTr1h2748khotkfPy3uXDRSBBuDDM1ZHWA`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/score/:score', async (req, res) => {
  try {
    const score= req.params.score;
    const response = await axios.get(` https://wlrd.live/score/${score}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZG9wYXJpbyIsImlhdCI6MTY4MjQ3OTYxOSwiZXhwIjoxNjgyNTMwMDE5fQ.CXBWxp8kFNTr1h2748khotkfPy3uXDRSBBuDDM1ZHWA`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/mae/:mae', async (req, res) => {
  try {
    const mae= req.params.mae;
    const response = await axios.get(` https://wlrd.live/mae/${mae}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZG9wYXJpbyIsImlhdCI6MTY4MjQ3OTYxOSwiZXhwIjoxNjgyNTMwMDE5fQ.CXBWxp8kFNTr1h2748khotkfPy3uXDRSBBuDDM1ZHWA`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/nome/:nome', async (req, res) => {
  try {
    const nome = req.params.nome;
    const response = await axios.get(`https://lordealeky.tk/api/puxar?token=Teste123&type=nome&q=${nome}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/placa/:placa', async (req, res) => {
  try {
    const placa = req.params.placa;
    const response = await axios.get(`https://lordealeky.tk/api/puxar?token=Teste123&type=placa&q=${placa}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/telefone/:telefone', async (req, res) => {
  try {
    const telefone = req.params.telefone;
    const response = await axios.get(`https://lordealeky.tk/api/puxar?token=Teste123&type=telefone&q=${telefone}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/cnpj/:cnpj', async (req, res) => {
  try {
    const cnpj = req.params.cnpj;
    const response = await axios.get(`https://lordealeky.tk/api/puxar?token=Teste123&type=cnpj&q=${cnpj}`);
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
