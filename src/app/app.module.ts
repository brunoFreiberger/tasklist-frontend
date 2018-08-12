import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatDialogModule
} from '@angular/material';
import { DialogEditTaskComponent } from './dialog-edit-task/dialog-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    DialogEditTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDnDModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogEditTaskComponent]
})
export class AppModule { }
