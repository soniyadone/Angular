import { Component, ViewChild ,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { TestService } from './test.service';

export interface PeriodicElement {
  name: string;
  email: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public batches = [];
  displayedColumns: string[] = ['name', 'email', 'address'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private obj: TestService)
  {

  }

  ngOnInit() {
    this.obj.getTableData().subscribe(data=>
      this.dataSource = new MatTableDataSource(data));
    console.log("data "+this.obj.getTableData().subscribe(data=>this.batches=data))
  }
}
