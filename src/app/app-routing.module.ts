import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreensComponent } from './screens/login-screens/login-screens.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  //Aqui se agregan las rutas del proyecto
  {path: '', component: LoginScreensComponent, pathMatch: 'full'},
  {path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
