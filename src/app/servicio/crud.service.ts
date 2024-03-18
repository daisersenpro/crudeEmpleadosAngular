import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; /* Necesiramos para comunicar con api crude */
import { Observable } from 'rxjs'; /* Observa todo lo que ocurre en html es monitoreado*/
import { Empleado } from './Empleado'; /* Tiene la estructira de los datos que se enviaran*/

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/empleados/'; //Declaramos la Api php ruta servidor local para trabajar con datos

  constructor(private clienteHttp:HttpClient) { }

 /*  Metodos para CRUD */

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  ObtenerEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  
  EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }


}
