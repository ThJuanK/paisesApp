import { Component, OnInit} from '@angular/core';
import { PaisService } from '../../services/pais-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: ['']
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.resultados = this.paisService.cacheStore.byCapital.paises
    this.initialValue = this.paisService.cacheStore.byCapital.term
  }

  public initialValue: string = ""
  public resultados: Country[] = [];
  public isLoading: boolean = false;

  searchByCapital(term: string): void{
    this.paisService.cacheStore.byCapital.term = term
    this.isLoading = true

    this.paisService.searchCapital(term)
    .subscribe(resp =>{
      this.resultados = resp
      this.isLoading = false;
    })
  }
}
