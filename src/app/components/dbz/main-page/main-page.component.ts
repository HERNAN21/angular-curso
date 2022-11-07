import { Component, OnInit } from '@angular/core';
import { DbzService } from 'src/app/services/dbz.service';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  constructor(
    // private dbzService: DbzService
  ) {
    // this.personajes = this.dbzService.personajes;
   }

  ngOnInit(): void {
  }

  // personajes: Personaje[] = [];

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100
  }

  // agregarNuevoPersonaje(event: Personaje){

  //   // console.log(event);
  //   // this.personajes.push(event);
  // }


}
