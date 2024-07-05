import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      "id":1,
      "firstName":"Rutuja",
      "lastName":"Deshmukh",
      "emailId":"rutuja@gmail.com",
      "mobileNo":9889788765
    },
    {
      "id":2,
      "firstName":"Atharva",
      "lastName":"Deshmukh",
      "emailId":"atharva@gmail.com",
      "mobileNo":9889788766
    },
    {
      "id":3,
      "firstName":"Priya",
      "lastName":"Pawar",
      "emailId":"priya@gmail.com",
      "mobileNo":9889788767
    }];
  }

}
