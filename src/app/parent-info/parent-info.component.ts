import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  @Input()
  age!: number;
  constructor() { }

  ngOnInit(): void {
 
  }

}
