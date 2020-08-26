import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes: Heroe[] = [];
  constructor(private http: HttpClient) {
    this.cargarHeores();
  }

  detalles(id: string) {
    return this.http.get(
      `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
    );
  }

  cargarHeores() {
    return this.http
      .get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .subscribe((res: Heroe[]) => {
        this.heroes = res;
      });
  }
}
