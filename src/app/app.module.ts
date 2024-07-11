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
import { PricingComponent } from './components/pricing/pricing.component';
import { PriceTagComponent } from './components/price-tag/price-tag.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CheckmarkComponent } from './components/checkmark/checkmark.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './components/faq/faq.component';

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
    PricingComponent,
    PriceTagComponent,
    PriceCalculatorComponent,
    FormComponent,
    SpinnerComponent,
    CheckmarkComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
