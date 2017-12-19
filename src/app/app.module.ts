import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {DataService } from './data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { StatsComponent } from './stats/stats.component';
import { ValuesPipe } from './values.pipe';
import { CurrencyComponent } from './currency/currency.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasicComponent,
    StatsComponent,
    ValuesPipe,
    CurrencyComponent,
    LoaderComponent,
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
