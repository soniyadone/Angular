import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { CRUDMethodService } from './crudmethod.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURDProject';
  submitted=false;
  disabledbutton=true;
  showSuccessMessage: boolean;

  
  constructor(public obj:FormBuilder,private serviceObj:CRUDMethodService)
  {

  }

  formControls = this.serviceObj.regiForm.controls;

 
  onSubmit()
  {
    this.submitted=true;

    if (this.serviceObj.regiForm.valid) 
    {
      if (this.serviceObj.regiForm.get('$key').value == null)
      {
        this.serviceObj.insertStudent(this.serviceObj.regiForm.value);
      }
      else
      {
        this.serviceObj.updateStudent(this.serviceObj.regiForm.value);
      }

    this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.serviceObj.regiForm.reset();
      
      //this is to be done for proper reset operation
      this.serviceObj.regiForm.setValue({
        fname: '',
        lname: '',
        address: '',
        mobileno: '',
        genderhideRequired: '',
        gender: 'male',
        branch: '',
        floatlabelhideRequired: '',
      floatLabel: 'no',
      });

    //alert('success!!:->\n\n'+JSON.stringify(this.regiForm.value,null,4));
  }
}

  radioChange($event: MatRadioChange) {
   
    if ($event.value === 'yes') {
      this.disabledbutton=false;
    }
    if ($event.value === 'no') {
      this.disabledbutton=true;
    }
}
}

