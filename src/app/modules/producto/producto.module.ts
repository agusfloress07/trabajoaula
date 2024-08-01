import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { AccesorioComponent } from './page/accesorio/accesorio.component';
import { IndumentariaComponent } from './page/indumentaria/indumentaria.component';
import { InformacionComponent } from './page/informacion/informacion.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AccesorioComponent,
    IndumentariaComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
