import { TasklistService } from './tasklist/tasklist.service';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';
import { DialogEditTaskComponent } from './dialog-edit-task/dialog-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    DialogEditTaskComponent,
    DialogConfirmComponent
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
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [TasklistService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogEditTaskComponent, DialogConfirmComponent]
})
export class AppModule { }
