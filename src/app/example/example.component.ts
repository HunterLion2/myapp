import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @Input() name: string = ""; // Bu şekilde buraya @Input() yazarak ben buradaki name değerini dışarıdan alıcağımı bildirmiş oldum.
  // Fakat burada ki Input değerini dışarıdan alabilmemiz için
  @Output() changeNameEvent = new EventEmitter<string>
  // Buradaki changeNameEvent değerini biz kendimiz veririz herhangi bir event adı yani sonrasın da yeni bir EventEmitter oluşturup tipini belirleriz

  changeName() {
    this.changeNameEvent.emit(this.name); // Burada ki emit() methodu veriyi aktaran kısma bu bilgiyi götürür ve değiştirtir.
  }
}
