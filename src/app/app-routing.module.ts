import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { ConsultarComponent } from './consultar/consultar.component';


const routes: Routes = [

  { path: 'app-comprar', component: ComprarComponent  },
{ path: 'app-consultar', component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
