import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OppsComponent } from './opps/opps.component';
import { GoatService } from './goat.service';

@NgModule({
  declarations: [
    AppComponent,
    OppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
