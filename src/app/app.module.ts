import { PersonaService } from './services/persona/persona.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { VacioPipe } from './pipes/vacio/vacio.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    VacioPipe,
    NotFoundComponent,
    HomeComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
