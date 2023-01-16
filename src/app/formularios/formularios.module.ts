import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormVistaComponent } from './form-vista/form-vista.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormVistaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormVistaComponent
  ]
})
export class FormulariosModule { }
