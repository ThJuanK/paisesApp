import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais-service.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})

export class PorRegionComponent implements OnInit {

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
    this.regionSeleccionada = this.PaisService.cacheStore.byRegion ?
    this.continentes[this.continentes_busqueda.indexOf(this.PaisService.cacheStore.byRegion?.term)] :
        ""

    this.resultados = this.PaisService.cacheStore.byRegion ?
      this.PaisService.cacheStore.byRegion?.paises :
        []
  }



  public resultados: Country[] = [];
  public continentes: string[] = ["Asia", "Antártida", "Europa", "África", "Oceanía", "América"]
  public regionSeleccionada: string = ""

  continentes_busqueda: string[] = ["Asia","Antarctic","Europe","Africa","Oceania","Americas"]

  public isLoading: boolean = false

  searchByRegion(term: string): void{
    this.regionSeleccionada = this.continentes[this.continentes_busqueda.indexOf(term)]
    if(this.PaisService.cacheStore.byRegion) this.PaisService.cacheStore.byRegion.term = this.regionSeleccionada

    this.isLoading = true
    this.PaisService.searchRegion(term)
    .subscribe(resp =>{
      this.resultados = resp
      this.isLoading = false

    })
  }

}
