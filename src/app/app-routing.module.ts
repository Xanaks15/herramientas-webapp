import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screens/login-screens.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ProductoRegistroScreenComponent } from './screens/producto-registro-screen/producto-registro-screen.component';

const routes: Routes = [
  //Aquí se agregan cada una de las rutas del proyecto
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'nuevo-login', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'producto-registro', component: ProductoRegistroScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
