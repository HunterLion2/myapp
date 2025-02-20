import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  imports: [ExampleComponent],
  template:`
    <h1> State Management - Input / Output</h1>
    <strong><p>Benim Adım {{name}}</p></strong>
    <hr>
    <app-example name = 'Örnek'></app-example>
    <app-example [name] = 'name' (changeNameEvent)= "changeName($event)"></app-example> <!-- Buradan bir değer almak istersek o zaman köşeli parantez yaparız. -->
 `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Çınar";

  changeName(event: string) {
    this.name = event;
  }

}
