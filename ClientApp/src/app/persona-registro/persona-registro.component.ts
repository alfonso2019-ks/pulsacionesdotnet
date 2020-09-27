import { Component, OnInit } from '@angular/core';
import { Persona } from '../pulsacion/models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.persona = new Persona;
  }

  add() {
    alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

}
