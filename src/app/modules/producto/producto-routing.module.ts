import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './page/producto/producto.component';
import { AccesorioComponent } from './page/accesorio/accesorio.component';
import { InformacionComponent } from './page/informacion/informacion.component';
import { IndumentariaComponent } from './page/indumentaria/indumentaria.component';

const routes: Routes = [
 {
  path:"producto", component:ProductoComponent
 },
 {
  path:"accesorio", component:AccesorioComponent
 },
 {
  path:"indumentaria", component:IndumentariaComponent
 },
 {
  path:"informacion", component:InformacionComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
 