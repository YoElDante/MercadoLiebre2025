const express = require ('express');
const path = require ('node:path');

const app = express();

app.use(express.static("./public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
  console.log(`Link directo http://localhost:${PORT}`);
});

app.get ( '/', (req, res) => {
  res.sendFile(path.join(__dirname , "./views/home.html"))
})

app.get ( '/register', (req, res) => {
  res.sendFile(path.join(__dirname , "./views/register.html"))
})

app.get ( '/login', (req, res) => {
  res.sendFile(path.join(__dirname , "./views/login.html"))
})