import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() table: number;
  @HostBinding('attr.class') cssClass = 'col-sm-4';

  name: string;
  numbers: Array<number> = [];

  constructor() {
      this.numbers = Array.from({length: 10},(v, k) => k + 1);
  }

  ngOnInit() {
    this.name = this.table + " table";
  }

}
