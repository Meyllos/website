import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/partials/about/about.component';
import { OurserviceComponent } from './components/partials/ourservice/ourservice.component';
import { TechnologieComponent } from './components/partials/technologie/technologie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    OurserviceComponent,
    TechnologieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
