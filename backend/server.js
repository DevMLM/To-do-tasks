const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro ao conectar no MongoDB:', err));

app.get('/', (req, res) => res.send('API Rodando'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
