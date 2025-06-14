import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

//Conexion a MongoDB 
connectDB();

//Configuracion de Rutas 
app.use('/api', superHeroRoutes);



//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada"});
});



//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

