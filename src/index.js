const { PORT } = require("./configuracion");
const app = require("./app");

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
