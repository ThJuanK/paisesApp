import { Country } from "./country.interface"

export interface CacheStore{
  byCapital: TermCountries,
  byPais: TermCountries,
  byRegion?: TermCountries
}

export interface TermCountries{
  term: string,
  paises: Country[]
}
