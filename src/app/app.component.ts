import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';

  arr = [];

  changed(val) {
    if (this.arr.length < 4) {
      this.arr.push(val);
    }
    console.log(this.arr);
  }
}
