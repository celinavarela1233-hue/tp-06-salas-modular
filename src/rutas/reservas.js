const express = require("express");
const router = express.Router();

const { definirSeccion, validarReserva } = require("../middleware/reservas");
const controlador = require("../controladores/reservas");

router.use(definirSeccion);

router.get("/", controlador.listarReservas);
router.get("/nueva", controlador.formularioNuevaReserva);
router.get("/:id", controlador.obtenerDetalleReserva);
router.post("/", validarReserva, controlador.crearNuevaReserva);

module.exports = router;
