import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// * Local Config
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-ca";
import { registerLocaleData } from "@angular/common";

registerLocaleData ( localeFrCA);
registerLocaleData ( localeEsHN);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
