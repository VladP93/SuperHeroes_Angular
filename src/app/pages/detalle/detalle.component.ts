import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  detalles: Heroe;

  constructor(private route: ActivatedRoute, public hs: HeroesService) {
    route.params.subscribe((data) => {
      hs.detalles(data['id']).subscribe((res: Heroe) => {
        this.detalles = res;
      });
    });
  }

  ngOnInit(): void {}
}
