import superHero from '../models/SuperHero.mjs'
import IRepository from './IRepository.mjs'

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id)
    }
    async obtenerTodos() {
        return await superHero.find()
    }

    // async buscarPorAtributo(atributo, valor) {
    //     return await superHero.find({[atributo]:valor})
    // }

    async buscarPorAtributo(atributo, valor) {
        const superHeroes = await superHero.find()
        return superHeroes.filter(superHeroes => 
        String(superHeroes[atributo]).toLowerCase().includes(valor.toLowerCase())
        )
    }

    // async obtenerMayoresDe30() {
    //     return await superHero.find({edad: {$gt:30} })
    // }

    async obtenerMayoresDe30() {
        const superHeroes = await superHero.find()
        return superHeroes.filter(superHero => superHero.edad > 30 && superHero.planetaOrigen === 'Tierra' && superHero.poderes.length >= 2)
    }
}

export default new SuperHeroRepository();


