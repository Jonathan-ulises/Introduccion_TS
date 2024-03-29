/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Jonathan'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimerHijos (pasajero: Pasajero) : void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimerHijos(pasajero1);