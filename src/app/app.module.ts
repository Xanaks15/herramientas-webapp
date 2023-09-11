import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ComponentModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreensComponent } from './screens/login-screens/login-screens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    LoginScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
