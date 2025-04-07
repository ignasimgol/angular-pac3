import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Shared/material.module';
import { SharedModule } from '../Shared/shared.module';
import { FormatDatePipe } from '../Shared/Pipes/format-date.pipe';
import { HomeComponent } from './components/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MaterialModule,
    SharedModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    PostsListComponent,
    PostFormComponent,
    HomeComponent,
    FormatDatePipe,
    DashboardComponent,
  ],
})
export class PostModule { }
