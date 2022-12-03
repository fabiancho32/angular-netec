import { Persona } from './../../models/persona.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 url:string = 'http://localhost:3000/api/';

 constructor(private http: HttpClient) { }
 headers: HttpHeaders = new HttpHeaders({
   "Content-type": "application/json"
 });

 getPersonas(){
  let url_personas = this.url + "personas";
    return this.http.get<Persona[]>(url_personas);
  }
}
