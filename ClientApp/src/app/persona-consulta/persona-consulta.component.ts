import { Component, OnInit } from '@angular/core';
import { Persona } from '../pulsacion/models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  personas: Persona[];
  searchText: string;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.personas = this.personaService.get();
  }

}
