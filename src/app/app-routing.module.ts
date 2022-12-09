import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PersonaComponent } from './components/persona/persona.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'personas', component:PersonaComponent, pathMatch: 'full'},
  {path: 'home', component:HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/personas', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
