import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TitlePipe } from './pipes/title.pipe';

import { HttpClientModule } from '@angular/common/http';
import { OrderRacePipe } from './pipes/order-race.pipe';
import { OrderAlignmentPipe } from './pipes/order-alignment.pipe';
import { OrderPublisherPipe } from './pipes/order-publisher.pipe';
import { OrderNamePipe } from './pipes/order-name.pipe';
import { FindRacePipe } from './pipes/find-race.pipe';
import { FindAlignmentPipe } from './pipes/find-alignment.pipe';
import { FindPublisherPipe } from './pipes/find-publisher.pipe';

import { FormsModule } from '@angular/forms';
import { RemoveRepRacePipe } from './pipes/remove-rep-race.pipe';
import { RemoveRepAlignmentPipe } from './pipes/remove-rep-alignment.pipe';
import { RemoveRepPublisherPipe } from './pipes/remove-rep-publisher.pipe';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetalleComponent,
    TitlePipe,
    OrderRacePipe,
    OrderAlignmentPipe,
    OrderPublisherPipe,
    OrderNamePipe,
    FindRacePipe,
    FindAlignmentPipe,
    FindPublisherPipe,
    RemoveRepRacePipe,
    RemoveRepAlignmentPipe,
    RemoveRepPublisherPipe,
    HeroCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
