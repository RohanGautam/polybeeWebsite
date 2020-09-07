import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { ImgTextVerticalComponent } from './components/img-text-vertical/img-text-vertical.component';
import { Section2Component } from './section2/section2.component';
import { PilotTrailsComponent } from './pilot-trails/pilot-trails.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { MediaTileComponent } from './media/media-tile/media-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    Section1Component,
    ImgTextVerticalComponent,
    Section2Component,
    PilotTrailsComponent,
    PartnersComponent,
    ContactComponent,
    MediaComponent,
    MediaTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
