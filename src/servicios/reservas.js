const salasPermitidas = ["Sala Norte", "Sala Sur", "Sala Multimedia"];
const turnosPermitidos = ["Mañana", "Tarde", "Noche"];

const reservas = [
  {
    id: 1,
    estudiante: "Rafael Herrera",
    email: "rafaherrera@gmail.com",
    sala: "Sala Sur",
    fecha: "04-08-2026",
    turno: "Tarde",
    personas: 5,
  },
  {
    id: 2,
    estudiante: "Celina Varela",
    email: "celinavarela123@gmail.com",
    sala: "Sala Norte",
    fecha: "09-08-2020",
    turno: "Mañana",
    personas: 3,
  },
  {
    id: 3,
    estudiante: "Maria Oliva",
    email: "mariaoliva45@gmail.com",
    sala: "Sala Multimedia",
    fecha: "22-11-2019",
    turno: "Noche",
    personas: 2,
  },
  {
    id: 4,
    estudiante: "Matias Castro",
    email: "matiascastro3434@gmail.com",
    sala: "Sala Sur",
    fecha: "30-09-2024",
    turno: "Mañana",
    personas: 4,
  },
  {
    id: 5,
    estudiante: "Edith Acevedo",
    email: "edithacevedo89@gmail.com",
    sala: "Sala Multimedia",
    fecha: "14-08-2022",
    turno: "Tarde",
    personas: 1,
  },
];

function obtenerTodas() {
  return reservas;
}

function obtenerPorId(id) {
  return reservas.find((r) => r.id === id);
}

function contarReservas() {
  return reservas.length;
}

function crearReserva(datosReserva) {
  const ultimoId = reservas.length === 0 ? 0 : reservas[reservas.length - 1].id;
  const nuevaReserva = {
    id: ultimoId + 1,
    ...datosReserva,
  };
  reservas.push(nuevaReserva);
  return nuevaReserva;
}

module.exports = {
  salasPermitidas,
  turnosPermitidos,
  obtenerTodas,
  obtenerPorId,
  contarReservas,
  crearReserva,
};
