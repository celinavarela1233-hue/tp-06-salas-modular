const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const path = require("node:path");

const {
  identificarSolicitud,
  medirDuracion,
} = require("./middleware/solicitudes");
const servicioReservas = require("./servicios/reservas");
const reservasRouter = require("./rutas/reservas");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.set("layout", "layouts/main");

app.use(morgan("dev"));
app.use(identificarSolicitud);
app.use(medirDuracion);
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .render("inicio", { titulo: "Salas de estudio y Reservar un turno" });
});

app.get("/estado", (req, res) => {
  res.status(200).json({
    servicio: "activo",
    reservas: servicioReservas.contarReservas(),
    solicitudId: res.locals.solicitudId,
  });
});

app.use("/reservas", reservasRouter);

app.use((req, res) => {
  res.status(404).render("no-encontrado", {
    titulo: "Página no encontrada",
    mensaje: "La página que buscas no existe",
  });
});

module.exports = app;
