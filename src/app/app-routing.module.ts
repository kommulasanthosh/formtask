import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'application' , component:ApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
