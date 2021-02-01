import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'sites', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {}
