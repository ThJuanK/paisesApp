import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PaisService } from '../../services/pais-service.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor( private routing: ActivatedRoute, private PaisService: PaisService, private router: Router) { }

  public country?: Country;
  public no_disp: string = ""

  ngOnInit(): void {

    this.routing.params
      .pipe(

        switchMap(({id}) => this.PaisService.searchPaisByAlphaCode(id))

      ).subscribe(resp => {

        if ( !resp ) return this.router.navigateByUrl('')

        this.country = resp

        console.log(this.country)

        return

      })


  }



}
