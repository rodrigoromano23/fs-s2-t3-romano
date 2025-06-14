import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroe} from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const{id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
        
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener Superheroe', error: error.mensaje});
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroeFormateado = renderizarListaSuperheroe(superheroes); 
        res.status(200).json(superheroeFormateado);

    } catch (error){
        res.status(500).send({mensaje: 'Error al buscar los superheroes', error: error.mensaje});
    }
    
}
export async function buscarSuperheroesPorAtributoController(req, res){
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404). send(
                {mensaje: 'No se encontraron superheroes con ese atributo'});
        }

        const superheroesFormateado = renderizarListaSuperheroe(superheroes);
        res.status(200).json(superheroesFormateado);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al buscar los superheroes', error: error.mensaje});
    }
}
export async function obtenerSuperheroesMayoresDe30Controller(req, res){
    try {
        //agregado 
        console.log("Buscando superheroes mayores de 30");
        const superheroes = await obtenerSuperheroesMayoresDe30();
        //agregado 
        console.log("Resultado", superheroes);
        if (superheroes.length === 0 ){
            return res.status(404).send(
                {mensaje: ' No se encontraron superheroes mayores de 30 años'});

        } 
        const superheroeFormateado = renderizarListaSuperheroe(superheroes);
        res.status(200).json(superheroeFormateado); 
    } catch (error) {
            //agregado
            console.error("Error en controlador", error);
            res.status(500).send (
                {mensaje: 'Error al obtener superheroes mayores de 30', error: error.message});
    }
}