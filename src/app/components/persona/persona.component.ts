import { PersonaService } from './../../services/persona/persona.service';
import { Generico } from './../../models/generico.model';
import { Persona } from './../../models/persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {

  public persona: Persona;

  public personas: Persona[];

  public estudioSeleccionado: Generico;
  
  public estudios: Generico[];

  public generos:Generico[];

  public listaPersonas: Persona[];

  constructor(private personaService:PersonaService){
    this.listaPersonas = [];
    this.persona = {};
    this.personas = [];
    this.estudioSeleccionado = {};
    this.getPersonas();
    this.generos = [
      {id:'0', value:'Masculino'},
      {id:'0', value:'Femenino'},
      {id:'0', value:'Otro'}
    ];

    this.estudios = [
      {id:'0', value:'sin estudios'},
      {id:'1', value:'Primaria'},
      {id:'2', value:'Secundaria'},
      {id:'3', value:'Tecnico/Tecnologo'},
      {id:'4', value:'Pregrado'},
      {id:'4', value:'Posgrado'}
    ]
  }

  cambiarGenero(genero: Generico){
    this.persona.sexo = genero;
    console.log(genero);
  }

  agregarLista(){

    if(!this.persona.primer_nombre){
      alert("Primer nombre es requerido");
    }else if(!this.persona.primer_apellido){
      alert("Primer apellido es requerido");
    }else{
      this.listaPersonas.push(this.persona);
      alert("Ha sido agregada la persona"+this.persona.primer_nombre+" "+this.persona.primer_apellido+" Correctamente");
      this.persona = {};
      this.estudioSeleccionado = {};
    }

  }

  SendDataonChange(event: any) {
    this.persona.fecha_nacimiento = event.target.value;
    }

    calcularEdad(fecha: Date) {
      var hoy = new Date();
      var cumpleanos = new Date(fecha);
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();
  
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
          edad--;
      }
  
      return edad;
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe((data) => (this.listaPersonas = data));
  }

}
