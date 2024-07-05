import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { BeforeAfterComponent } from './components/before-after/before-after.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    WelcomeScreenComponent,
    AboutUsComponent,
    MaterialsComponent,
    BeforeAfterComponent,
    GalleryComponent,
    GalleryModalComponent,
    SwiperDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
