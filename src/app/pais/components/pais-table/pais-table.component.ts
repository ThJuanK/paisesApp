import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [`
    img{
      width: 40px;
      height: auto;
    }
  `]
})
export class PaisTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public paises: Country[] = []


}
