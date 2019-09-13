import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import { CRUDMethodService } from '../crudmethod.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PeriodicElement {
  position: number;
  fname: string;
  lname: string;
  address: string;
  mobileno: number;
  gender: string;
  branch: string;
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


const ELEMENT_DATA: PeriodicElement[] = [ ];


@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

  submitted=false;
  disabledbutton=true;
  showSuccessMessage: boolean;
  studentArray=[];
  stddetail;

  public stdlist = [];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position','fname','lname','address','mobileno','gender','branch','actions'];

  constructor(public obj:FormBuilder,private serviceObj:CRUDMethodService,public dialog: MatDialog)
  {

  }

  ngOnInit(){
    this.serviceObj.getStudents().subscribe(list =>
        this.dataSource=new MatTableDataSource(list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        })));
      }

      openDialog(keydata) {  
        this.dialog.open(DialogDataExampleDialog, {
          data: {
            kdata: keydata
          }
        });
      }

      onDelete($key) 
  {
    if (confirm('Are you sure to delete this ?')) 
    {
      this.serviceObj.deleteStudent($key);
     // this.showDeletedMessage = true;
     // setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
