console.log('MONGO_URI:', process.env.MONGO_URI);

const express = require('express'); // Importa o Express
const mongoose = require('mongoose'); // Importa o Mongoose
const dotenv = require('dotenv'); // Importa o dotenv
const taskRoutes = require('./routes/taskRoutes'); // Importa as rotas

dotenv.config(); // Carrega o arquivo .env

const app = express(); // Inicializa o Express
const PORT = process.env.PORT || 5000; // Define a porta

// Middleware para JSON
app.use(express.json());

// Conexão ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro ao conectar no MongoDB:', err));

// Rotas
app.use('/api', taskRoutes);

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
