import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyloading';
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Admin Module', 'Admin Module Works', {
      duration: 2000,
    });
  }

  openSnackBar1() {
    this._snackBar.open('Staff Module', 'Staff Module Works', {
      duration: 2000,
    });
  }
}
