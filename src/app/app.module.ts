import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './header/navbar.component';
import { AngularMaterialModule } from './angular-material.module';
import { RoutesModule } from './routes/routes.module';
import { AboutComponent } from './about/about.component';
import { SitesComponent } from './sites/sites.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialElevationDirective } from './material-elevation.directive';
import { ResponsiveService } from './responsive-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SitesComponent,
    ContactComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    RoutesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
