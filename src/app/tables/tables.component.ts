import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass']
})
export class TablesComponent implements OnInit {

  tables: number[];

  constructor() {
      this.tables = Array.from(new Array(10),(val, index) => index);
  }
  ngOnInit() {
  }

}
