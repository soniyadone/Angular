import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { StudlistComponent } from './studlist/studlist.component';
import { DialogDataExampleDialog } from './studlist/studlist.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog,
    StudlistComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [DialogDataExampleDialog],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
