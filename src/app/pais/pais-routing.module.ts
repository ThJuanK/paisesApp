import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {
    path: "por-pais",
    component: PorPaisComponent
  },
  {
    path: "por-capital",
    component: PorCapitalComponent
  },
  {
    path: "por-region",
    component: PorRegionComponent
  },
  {
    path: "by/:id",
    component: VerPaisComponent
  },
  {
    path: "**",
    redirectTo: "por-pais"
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class paisRoutingModule { }
