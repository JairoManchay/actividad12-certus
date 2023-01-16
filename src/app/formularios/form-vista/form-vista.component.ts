import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styles: [
  ]
})
export class FormVistaComponent {

  constructor(private formValidacion: FormBuilder){}

  // Estructura del formulario
  registrar = this.formValidacion.group({
    nombre:[
      '',
      {
        validators:[
          Validators.required,
        ]
      }
    ],
    email:[
      '',
      {
        validators:[
          Validators.required,
        ]
      }
    ],
    telefono:[
      '',
      {
        validators:[
          Validators.required,
          Validators.pattern('[0-9]{9}')
        ]
      }
    ],
    asunto:[
      '',
      {
        validators:[
          Validators.required,
        ]
      }
    ],
    mensaje:[
      '',
      {
        validators:[
          Validators.required,
        ]
      }
    ],
  })

  // Metodo para obtener cada atributo del form
  get nombre(){return this.registrar.get('nombre');}
  get email(){return this.registrar.get('email');}
  get telefono(){return this.registrar.get('telefono');}
  get asunto(){return this.registrar.get('asunto');}
  get mensaje(){return this.registrar.get('mensaje');}

  // Recibir mensaje
  mensajes: string = "Gracias por comunicarnos con nosotros";
  prueba = false;

  onSubmit(){
    if(!this.registrar.valid){
      return;
    }
    this.prueba=true;
  }
}
