import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: ['']
})
export class PorPaisComponent implements OnInit{

  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
    this.resultados = this.PaisService.cacheStore.byPais.paises
    this.initialValue = this.PaisService.cacheStore.byPais.term
  }

  public resultados: Country[] = [];
  public isLoading: boolean = false
  public initialValue: string = ""

  searchByPais(term: string): void{
    this.PaisService.cacheStore.byPais.term = term
    this.isLoading = true
     this.PaisService.searchPais(term)
     .subscribe(resp =>{
      this.resultados = resp
      this.isLoading = false
     })
  }
}
