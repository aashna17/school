import { Component, OnInit } from '@angular/core';

import { SchoolService } from "../shared/school.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
  providers:[SchoolService]
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
