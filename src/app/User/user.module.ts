import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Shared/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [RegisterComponent, ProfileComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class UserModule {}
