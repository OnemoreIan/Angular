import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mate',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.css']
})
export class MatematicaComponent implements OnInit {

  edad: number;
  nombres: Array<string>;

  constructor() {
    this.edad = 10;
    this.nombres = ['juan', 'pablo', 'roberto'];
   }

  ngOnInit(): void {
    console.log('Componente matematicas cargado');
  }


  aumentarEdad(){
    this.edad++;
  }

  disminuirEdad(){
    this.edad--;
  }

}
