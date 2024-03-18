import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* Importados para usar */
import {HttpClientModule} from '@angular/common/http'; /* Importados para usar */


@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* declarados para usar */
    ReactiveFormsModule, /* declarados para usar */
    HttpClientModule /* declarados para usar */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
