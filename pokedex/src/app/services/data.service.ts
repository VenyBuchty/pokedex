import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  /* Limit wurde auf 150 gestellte, sonst zu lange lade Zeit. Mögliche Lösung - Infinit-Scroll oder Pagination*/
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }


  getInfo(id) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/`+id);
  }

  getEvolution(id) {
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/`+id);
  }
}
