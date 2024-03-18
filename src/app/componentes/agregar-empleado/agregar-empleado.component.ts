import { Component, OnInit } from '@angular/core';
/* Impotamos FormGroup, FormBuilder para poder interactuar con el usuario */
import { FormGroup, FormBuilder } from '@angular/forms';
/* Impotamos el servicio que creamos API(crude.services.ts) */
import { CrudService } from 'src/app/servicio/crud.service';
/* Impotamos el rutador) */
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  /* Ocupamos el FormGroup */
  formularioDeEmpleados:FormGroup;

  /* Ocupamos el FormBuilder, CrudService, Router y lo necesario */
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router

    ) { 
    
    /* Recepcinamos datos del Formulario */
  this.formularioDeEmpleados=this.formulario.group({
    nombre:[''],
    correo:['']
  });

  }
  ngOnInit(): void {
  }
  /* enviarDatos Viene de ngSubmit en formulario y el any significa captura cualquier dato y se llama desde .ts */
  enviarDatos():any{
    console.log("Me presionaste");
    console.log(this.formularioDeEmpleados.value);
    /* Le pasomo los datos del formulario y lo ejecutamos con suscribe(); */
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
      /*  Para en¿rutar despues de clic a donde se requiera */
      this.ruteador.navigateByUrl('/listar-empleado');
    });
   
  }

}
