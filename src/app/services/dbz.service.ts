import { Injectable } from '@angular/core';

import { Personaje } from '../components/dbz/interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    constructor(){}

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }


    // Agregar Personaje

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

    
}