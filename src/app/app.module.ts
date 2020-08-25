import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TitlePipe } from './pipes/title.pipe';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeroesComponent, DetalleComponent, TitlePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
