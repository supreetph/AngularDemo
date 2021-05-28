import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './Components/header/header.component';
import{FormDemoComponent} from './Components/form-demo/form-demo.component';

const routes: Routes = [
  {
    path:'Header',
    component:HeaderComponent
  },
  {
    path:'form',
    component:FormDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
