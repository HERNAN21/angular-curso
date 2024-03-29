import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from 'src/app/services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  // @Input() personajes: Personaje[]=[];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  agregarPersonaje(){
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }
    
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre: '',
      poder: 0
    };
    
  }

  

}
