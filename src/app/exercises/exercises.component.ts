import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.sass']
})
export class ExercisesComponent implements OnInit {

  data;
  points = 0;
  constructor() {
      this.data = Array.from(new Array(10),(val, index) => index);
  }

  ngOnInit() {
  }

  sumPoints(a) {
    if (a) {
      this.points++;
    }
  }
}
