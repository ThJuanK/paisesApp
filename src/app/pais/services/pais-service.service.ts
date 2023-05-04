import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})

export class PaisService{
  apiurl: string = "https://restcountries.com/v3.1"

  public cacheStore: CacheStore = {
    byCapital: {term: '', paises: []},
    byPais: {term: '', paises: []},
    byRegion: {term: '', paises: []}
  }

  constructor(private http: HttpClient) { this.loadFromLocalStorage() }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
  }

  searchPaisByAlphaCode(alphaCode: string): Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiurl}/alpha/${alphaCode}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(() => of(null))
    )
  }

  searchCapital(query: string): Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiurl}/capital/${query}`)
      .pipe(
        catchError(() => of([])),
        tap(resp => this.cacheStore.byCapital = {term: query, paises: resp}),
        tap(() => this.saveToLocalStorage()),
        delay(100)
      )
  }

  searchPais(query: string): Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiurl}/name/${query}`)
    .pipe(
     catchError(() => of([])),
     tap(resp => this.cacheStore.byPais = {term: query, paises: resp}),
     tap(() => this.saveToLocalStorage()),
     delay(100)
    )
  }

  searchRegion(query: string): Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiurl}/region/${query}`)
    .pipe(
      tap(resp => this.cacheStore.byRegion = {term: query, paises: resp}),
      tap(() => this.saveToLocalStorage()),
      catchError(() => of([])),
      delay(100)
    )
  }

}
