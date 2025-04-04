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

@NgModule({
  declarations: [
    PostsListComponent,
    PostFormComponent,
    HomeComponent,
    FormatDatePipe,
    DashboardComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MaterialModule,
    SharedModule
  ],
})
export class PostModule { }
