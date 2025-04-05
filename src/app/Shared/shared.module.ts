import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }