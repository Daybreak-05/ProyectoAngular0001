import { Component } from '@angular/core';

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

  esfumador(){
    return this.fumador? 'Sí es fumador' : 'No es fumador';
  }
}
