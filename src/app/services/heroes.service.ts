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

  cargarHeores() {
    return this.http
      .get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .subscribe((res: Heroe[]) => {
        this.heroes = res;
      });
  }
}
