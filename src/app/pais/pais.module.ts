import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { paisRoutingModule } from './pais-routing.module';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { SharedModule } from '../Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PaisTableComponent } from './components/pais-table/pais-table.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTableComponent
  ],
  imports: [
    CommonModule,
    paisRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
