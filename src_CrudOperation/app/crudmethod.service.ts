import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CRUDMethodService {
  studentList: AngularFireList<any>;
  sd;
  disabledbutton: any;

  constructor(private firebase: AngularFireDatabase,public obj:FormBuilder) { }

  regiForm=this.obj.group(
    {
      $key : [null],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      address : ['',Validators.required],
      mobileno : ['',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10}$")]],
      gender : ['male'],
      branch : ['',Validators.required]
    }
  )

  get f()
  {
    return this.regiForm.controls;
  }

  getStudents() 
  {
    this.studentList = this.firebase.list('students');
    console.log("list"+this.studentList)
    return this.studentList.snapshotChanges();
  }

  insertStudent(student) 
  {
    this.studentList = this.firebase.list('students');
    this.studentList.push({
      fname: student.fname,
      lname: student.lname,
      address: student.address,
      mobileno: student.mobileno,
      gender:student.gender,
      branch:student.branch,
    });
  }

  populateForm(student) 
  {
    console.log(student)
    this.regiForm.setValue(student); 
  }

  deleteStudent($key: string) 
  {
    this.studentList.remove($key);
  }

  updateStudent(student) 
  {
    this.studentList.update(student.$key,
      {
        fname: student.fname,
        lname: student.lname,
        address: student.address,
        mobileno: student.mobileno,
        gender: student.gender,
        branch: student.branch
      });
  }
}
