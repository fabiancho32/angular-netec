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

  public generos: Generico[];

  public generoSeleccionado: Generico;

  public listaPersonas: Persona[];
  
  public error:boolean = false;

  public errorMessage:string = '';

  public loading:boolean = true;

  constructor(private personasService: PersonaService) {
    this.getPersonas();
    this.listaPersonas = [];
    this.persona = {};
    this.personas = [];
    this.estudioSeleccionado = {};
    this.generoSeleccionado = {};

    this.generos = [
      { id: '1', value: 'Masculino' },
      { id: '2', value: 'Femenino' },
      { id: '3', value: 'Otro' }
    ];

    this.estudios = [
      { id: '0', value: 'sin estudios' },
      { id: '1', value: 'Primaria' },
      { id: '2', value: 'Secundaria' },
      { id: '3', value: 'Tecnico/Tecnologo' },
      { id: '4', value: 'Pregrado' },
      { id: '4', value: 'Posgrado' }
    ]
  }

  getEstudios(id:string){
    let estudio = this.estudios.find(estudio => estudio.id === id);
    return (estudio?.value? estudio.value : 'N/A');
  }
  getSexo(id:string){
    let sexo = this.generos.find(sexo => sexo.id === id);
    return (sexo?.value? sexo.value : 'N/A');
  }
  getPersonas() {
    this.personasService.getPersonas().subscribe({
        next: data => {
          this.error = false;
          this.errorMessage = '';
          this.listaPersonas = data;
          this.loading = false;
        },
        error: error => {
          this.error = true;
          this.errorMessage = error.message;
          this.loading = false;
        }
      })
  }


  cambiarGenero(genero: Generico) {
    console.log(genero.id);
    this.persona.sexo = genero.id;
  }

  agregarLista() {

    if(this.estudioSeleccionado){
      
      this.persona.estudios = (this.estudioSeleccionado.id? (this.estudioSeleccionado.id): '0');
    }

    if (!this.persona.primer_nombre) {
      alert("Primer nombre es requerido");
    } else if (!this.persona.primer_apellido) {
      alert("Primer apellido es requerido");
    } else {   
      this.personasService.createPersonas(this.persona).subscribe({
        next: data => {
          this.listaPersonas.push(data);
          alert("Ha sido agregada la persona: " + this.persona.primer_nombre + " " + this.persona.primer_apellido + " Correctamente");
          this.persona = {};
          this.estudioSeleccionado = {};
        },
        error: error => {
          alert('Lo sentimos ha ocurrido un error intente nuevamente mas tarde...! ' + error.message);
        }
      })
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

}
