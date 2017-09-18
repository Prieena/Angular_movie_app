import { MessageService } from './msg.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabbableComponent } from './tabbable/tabbable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    CarouselComponent,
    TabbableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
