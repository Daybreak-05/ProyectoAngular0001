import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAngular0001';
  nombre:string = 'Pablo';
  fumador:boolean = false;
  notas = [8.1, 5.6, 3.2];
  //notas:array = [8.1, 5.6, 3.2];
  edad:number = 19;
  counter:number  =0;

  esfumador(){
    return this.fumador? 'Sí es fumador' : 'No es fumador';
  }

  provincias = [

    {nombre: 'Almería', capital: 'Almería'},
  {nombre: 'Cádiz', capital: 'Cádiz'},
  {nombre: 'Córdoba', capital: 'Córdoba'},
  {nombre: 'Granada', capital: 'Granada'},
  {nombre: 'Huelva', capital: 'Huelva'},
  {nombre: 'Jaén', capital: 'Jaén'},
  ];

  pulsarBoton(){
    alert('Has pulsado el botón');
  }

  incrementar(){
    this.counter++;
  }

  decrementar(){
    if(this.counter>0){
      
      this.counter--;
    }
  }

}
