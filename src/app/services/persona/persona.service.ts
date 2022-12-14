import { Persona } from './../../models/persona.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "http://localhost:3000/api/";

  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  constructor(private http: HttpClient) { }

  getPersonas() {
    let url_personas = this.url + "personas";
    return this.http.get<Persona[]>(url_personas);
  }

  createPersonas(persona: Persona): Observable<Persona> {
    let url_personas = this.url + "personas";
    return this.http.post<Persona>(url_personas, persona);
  }



}
