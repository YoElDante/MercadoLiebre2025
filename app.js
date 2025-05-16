const express = require ('express');
const path = require ('node:path');

const app = express();

app.use(express.static("./public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Servidor en linea en http://localhost:3000`);
});

app.get ( '/', (req, res) => {
  res.sendFile(path.join(__dirname , "./views/home.html"))
})