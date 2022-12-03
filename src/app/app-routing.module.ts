import { PersonaComponent } from './components/persona/persona.component';
import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path:'persona', component: PersonaComponent},
  {path: '**', component: PersonaComponent}

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
