export function renderizarSuperheroe(superheroe) {
    return {
        nombre: superheroe.nombreSuperheroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.Aliados,
        Enemigos: superheroe.enemigos
    };
}
export function renderizarListaSuperheroe(superheroes){
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}