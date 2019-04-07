import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.sass']
})
export class ExerciseComponent implements OnInit {

  @Output() calification = new EventEmitter<boolean>();
  n1: number;
  n2: number;
  resultForm;
  tries = false;

  constructor(private formBuilder: FormBuilder) {
    this.n1 = Math.floor(Math.random() * 10);
    this.n2 = Math.floor(Math.random() * 10);

      this.resultForm = this.formBuilder.group({
          'result': ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  checkCalification() {
    this.tries = true;
    this.calification.emit(this.n1 * this.n2 === this.resultForm.value.result);
  }

}
