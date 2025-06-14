import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }
    async obtenerTodos() {
        return await SuperHero.find({});
    }
    async buscarPorAtributo(atributo, valor) {
        //RESOLVER
         const query = {};
    query[atributo] = isNaN(valor) ? valor : Number(valor);
    return await SuperHero.find(query);
    }
    async obtenerMayoresDe30() {
        //RESOLVER
        return await SuperHero.find({ edad: { $gt: 30 } });
    }
}
export default new SuperHeroRepository();
