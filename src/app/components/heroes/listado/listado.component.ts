import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  
  public heroeBorrado:string = '';
  heroes:string[] = ['Spiderman', 'Iroman', 'Crawler', 'Moz'];

  borrarHeroe(): void{
    const heroeEliminado=this.heroes.shift() || '';
    this.heroeBorrado = heroeEliminado;
  }

}
