import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Classe deve comandar toda a aplicação
export class AppComponent {
// Atributo
  title:string = 'Lista de Contatos';

  constructor(){
    console.log(`Construindo a apliação ${this.title}`)
  }
}
