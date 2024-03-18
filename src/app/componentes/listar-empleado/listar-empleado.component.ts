import { Component, OnInit } from '@angular/core';
/* Impostamos en crude service para usarl el metodo de obtner empelado*/
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  Empleados:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
  /*   Utilizamos el crude Services para ObtenerEmpleados Imprimimos en consola e interfaz de Usuario*/
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);

      this.Empleados=respuesta;
    });
  }
  borrarRegistro(id:any, iControl:any){ /* any hace referencia a todo */
    console.log(id);
    console.log(iControl);

    if(window.confirm("¿Desea borrar el registro?")){

    this.crudService.BorrarEmpleado(id).subscribe((respuesta)=>{

      this.Empleados.splice(iControl,1);
    });
  }

  }
}
