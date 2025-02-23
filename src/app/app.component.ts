import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  imports: [ExampleComponent],
  template:`

    <h1>{{ count() }}</h1>
    <br>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <hr>
    <ul>
      <li *ngFor="let r of results"></li>
    </ul>

    <!-- <h1> State Management - Input / Output</h1>
    <strong><p>Benim Adım {{name}}</p></strong>
    <hr>
    <app-example name = 'Örnek'></app-example>
    <app-example [name] = 'name' (changeNameEvent)= "changeName($event)"></app-example>--> <!-- Buradan bir değer almak istersek o zaman köşeli parantez yaparız. -->
 `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  count = signal(0); // Biz burada signal değeri sayesinde count değeri değiştiği zaman gidip de bütün sayfayı yenileme sadece buradaki değeri update'le diyoruz
  // update() değeri ise signal değeri ile kullanılır ve içerisine parantez açtıktan sonra buraya alınan değer için bir ad veririz ve sonucunda ne olucağını söyleriz.
  results = signal<string[]>([]);

  countPlus = computed(() => this.count() + 1);
  countEffect = effect(() => console.log(this.count() + "değişti"))

  increment() {

    // Update yerine kullanılacak bilecek bir de Set metodu vardır fakat aynı mantıkta ve aynı işlem için kullanılır bir farkı yoktur.
    // this.count.set(this.count() + 1);

    this.count.update((oldValue) => oldValue + 1);
    this.results.update((oldValue) => [...oldValue, 'increment']);
  }

  decrement() {
    this.count.update((oldValue) => oldValue - 1);
    this.results.update((oldValue) => [...oldValue, 'decrement']);
  }

}
