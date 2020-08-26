import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Heroe;

  constructor() {}

  ngOnInit(): void {}
}
