import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  findByRace = '';
  findByAlignment = '';
  findByPublisher = '';
  p: number = 1;

  constructor(public hs: HeroesService) {}

  ngOnInit(): void {}
}
