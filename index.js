const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
    console.log("rodando na porta 3000")
})