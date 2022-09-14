import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor() { }

  
  @Input()
  age!: number;

  ngOnInit(): void {
    // alert("Child")
  }

}
