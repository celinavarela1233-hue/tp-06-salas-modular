# Trabajo práctico 06

## Proyecto de partida y cambios
Como base tome el desarrollo del TP05.
Se refactorizo la estructura previa, (configuracion, servidor/app, ruta, controladores, middleware y servicios)

## Principales cambios realizados:
- Se creo src/servicios/reservas.js para administar los datos en memoria sin acoplamiento a Express
- Se creo src/controladores/reservas.js para gestionar la interaccion HTTP
- Organización de los endpoints en src/rutas/reservas.js y separación de middlewares en src/middleware/solicitudes.js y src/middleware/reservas.js
- Módulo src/configuracion.js para la lectura y validación de variables de enterno

## Instalación y ejecución
- Clonar el proyecto
- npm install : instalar dependecias
- npm start : ejecutar 

## Configuración del entorno
PORT=3000
NODE_ENV=development

## Mapa de módulos y dependencias
- src/index.js : punto de entrada, carga src/configuracion.js y levanta el servidor escuchando en el puerto definido
- src/configuracion.js: exporta las variables de entorno
- src/app.js: instancia Express, configura el motor de plantillas EJS, middlewares globales 
- src/rutas/reservas.js: define las rutas relativas para las reservas y conecta cada endpoint con sus respectivos middlewares y controladores
- src/middleware/solicitudes.js: genera el ID único de solicitud (BIB-XXXX) y mide los tiempos de respuesta
- src/middleware/reservas.js: asigna la sección actual y valida los datos enviados mediante POST
- src/controladores/reservas.js: llama a la capa de servicio para obtener/guardar datos y renderiza las vistas correspondientes
- src/servicios/reservas.js: mantiene en memoria el arreglo de reservas y expone funciones puras

## Pipeline y contrato de rutas
Morgan -> identificarSolicitud -> medirDuracion -> layouts -> static -> urlencoded -> json -> rutas de aplicación -> router /reservas -> 404

GET  /                   -> 200, inicio
GET  /estado             -> 200, JSON con cantidad e ID BIB-
GET  /reservas           -> 200, listado
GET  /reservas/nueva     -> 200, formulario
GET  /reservas/:id       -> 200 o 404 HTML
POST /reservas           -> 302 válido; 400 inválido
GET  /css/estilos.css    -> 200
otra URL                -> 404 HTML

## Matriz antes/después
- Inicio: antes: 200 - despues: 200
- Listado: antes: 200 - despues: 200
- Formulario: antes: 200 - despues: 200
- POST inválido: antes: 400 - despues: 400
- POST válido: antes: 302 - despues: 302
- 404: antes: 404 - despues: 404

## Formato y análisis estático
- npm install 
- npm run format 
- npm run check 
- npm start 

Todos los comandos fueron ejecutados con éxito

## Persistencia temporal y límites
- Los datos de las reservas residen en un arreglo en memoria dentro del servicio src/servicios/reservas.js
- oda reserva creada mediante el formulario POST /reservas se conservará únicamente mientras el proceso de Node.js se mantenga activo. Al reiniciar o detener el servidor, los datos se restauran a su estado inicial

---

**Por que el servicio no usa res?**: para separar responsabilidades, maneja pura logica de negocio y datos

**Que hace el controlador?**: intermedia entre la red y la logica, recibe la peticion HTTP, consulta al servicio y decide la respuesta

**Por que el router declara caminos relativos?**: porque se monta sonre el prefijo /reservas en app.js, lo que permite cambiar la ruta base en un solo lugar sin romper las rutas internas

**Donde vive el unico arreglo de reservas y que ocurrira con el al reinciar?**: vive en la memoria RAM dentro de src/servicios/reservas.js. Al reiniciar el servidor, la memoria se limpia y el arreglo vuelve a su estado inicial

**Comandos ejecutados y sus resultados**: npm run format aplico el formato de Prettier sin errores, y npm run check confirmo el cumplimiento del estilo y del analisis estatico 
