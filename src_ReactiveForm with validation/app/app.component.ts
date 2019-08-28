import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  submitted = false;
  constructor(public obj : FormBuilder)
  {

  }
  BasicForm=this.obj.group(
    {
      username : ['Soniya',[Validators.required,Validators.minLength(7)]],
      password : ['',[Validators.required,Validators.pattern("[a-zA-Z]")]],
      confirmpassword : ['',Validators.required],
      NestedFormId : this.obj.group(
        {
          batchname : ['Python'],
          fees : ['2000']
        }
      )
    }
  )

  get f() { return this.BasicForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.BasicForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.BasicForm.value, null, 4));
    }

}
