import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MaterialsComponent } from './components/materials/materials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    WelcomeScreenComponent,
    AboutUsComponent,
    MaterialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
