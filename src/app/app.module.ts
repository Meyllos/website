import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { AboutComponent } from './components/partials/about/about.component';
import { OurserviceComponent } from './components/partials/ourservice/ourservice.component';
import { TechnologieComponent } from './components/partials/technologie/technologie.component';
import { FrontendComponent } from './components/partials/stack/frontend/frontend.component';
import { BackendComponent } from './components/partials/stack/backend/backend.component';
import { MobileComponent } from './components/partials/stack/mobile/mobile.component';
import { DatabaseComponent } from './components/partials/stack/database/database.component';
import { InfrastructureComponent } from './components/partials/stack/infrastructure/infrastructure.component';
import { AutotestComponent } from './components/partials/stack/autotest/autotest.component';
import { ContactComponent } from './components/partials/contact/contact.component';
import { FooterComponent } from './components/partials/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    OurserviceComponent,
    TechnologieComponent,
    FrontendComponent,
    BackendComponent,
    MobileComponent,
    DatabaseComponent,
    InfrastructureComponent,
    AutotestComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
