import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
/* import { FormatDatePipe } from '../Shared/Pipes/format-date.pipe';
 */import { HomeComponent } from './components/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
/* import { MatCardModule } from '@angular/material/card';
 */
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

/* import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; */

@NgModule({
  declarations: [
    PostsListComponent,
    PostFormComponent,
    HomeComponent,
    /* FormatDatePipe, */
    DashboardComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    /* MatCardModule, */
    CanvasJSAngularChartsModule
/*     MatDatepickerModule,
    MatNativeDateModule */
  ],
})
export class PostModule {}
