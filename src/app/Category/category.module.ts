import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Shared/material.module';
import { SharedModule } from '../Shared/shared.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

@NgModule({
  declarations: [CategoriesListComponent, CategoryFormComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MaterialModule,
    SharedModule
  ],
})
export class CategoryModule { }
