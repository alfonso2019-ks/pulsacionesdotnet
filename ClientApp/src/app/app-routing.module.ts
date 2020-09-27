import { PersonaRegistroComponent } from './persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './persona-consulta/persona-consulta.component'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';

import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'personaList',
    component: PersonaConsultaComponent
  },
  {
    path: 'personaAdd',
    component: PersonaRegistroComponent
  }
];  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
