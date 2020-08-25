import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'detalles',
    component: DetalleComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
