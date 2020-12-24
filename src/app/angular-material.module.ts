import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  //Imports are done automatically as an Angular included feature
  exports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule {}
