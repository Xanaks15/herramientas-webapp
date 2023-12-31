import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {

   //Aquí van las variables
  public editar:boolean = false;
  public user: any = {};
   //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
   //Para detectar errores
  public errors:any ={};

  constructor(
    private location: Location,
    private usuariosService: UsuariosService
  ) {
    // No debes asignar el valor de 'picker' aquí
  }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    console.log("User: ", this.user);
  }

  public regresar() {
    this.location.back();
  }
  public registrar() { //No todas las rutas de acceso devuelven un valor
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if (!$.isEmptyObject(this.errors)) {
      //Pasa la validación
      return false;
    }
    //valida la contraseña
    if(this.user.password == this.user.confirmar_password){
      //Funcion para registrarse
      alert("Todo chido vamos a registrar");
    }else{
      alert("Las contraseñas no coinciden");
      this.user.password="";
      this.user.confirmar_password="";
    }
  }

  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

   //Función para detectar el cambio de fecha
  //Para la fecha
  public changeFecha(event :any){
    console.log(event);
    console.log(event.value.toISOString());
    
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
  }

}