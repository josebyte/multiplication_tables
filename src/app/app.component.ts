import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tables = [];

  constructor() {
      this.tables = Array.from({length: 10},(v, k) => k + 1);
  }

  save(newTable: number) :boolean {
    this.tables.push(newTable);
      return false;
  }

}
