import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { SitesComponent } from "../sites/sites.component";
import { ContactComponent } from "../contact/contact.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'sites', component: SitesComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {}
