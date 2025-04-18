import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { CardComponent } from './Components/card/card.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    CardComponent
  ]
})
export class SharedModule { }