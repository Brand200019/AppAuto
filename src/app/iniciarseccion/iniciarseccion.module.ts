import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarseccionPageRoutingModule } from './iniciarseccion-routing.module';

import { IniciarseccionPage } from './iniciarseccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarseccionPageRoutingModule
  ],
  declarations: [IniciarseccionPage]
})
export class IniciarseccionPageModule {}
