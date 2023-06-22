import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  num1?: number;
  num2?: number;
  result?: number;

  sum() {
    if (this.num1 && this.num2) {
      this.result = this.num1 + this.num2;
    } else {
      alert('Can not sum');
    }
  }
  subtract() {
    if (this.num1 && this.num2) {
      this.result = this.num1 - this.num2;
    } else {
      alert('Can not subtract');
    }
  }
}
