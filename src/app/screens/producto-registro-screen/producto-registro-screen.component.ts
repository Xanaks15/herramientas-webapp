import { ProductoService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ErrorsService } from 'src/app/services/tools/errors.service';
declare var $: any;
@Component({
  selector: 'app-producto-registro-screen',
  templateUrl: './producto-registro-screen.component.html',
  styleUrls: ['./producto-registro-screen.component.scss']
})
export class ProductoRegistroScreenComponent implements OnInit {

  public editar:boolean = false;
  public producto: any = {};
  public errors:any ={};
  
constructor(
  private location: Location,
  private Router: Router,
  private productosService: ProductoService,
) { }

ngOnInit (): void {
  this.producto = this.productosService.esquemaProducto;
    console.log("Producto: ", this.producto);
}

public regresar() {
  this.location.back();
}

public home() {
  this.Router.navigate([""]);
}

public registrar() { //No todas las rutas de acceso devuelven un valor
  this.errors = [];

  this.errors = this.productosService.validarProducto(this.producto);
  if (!$.isEmptyObject(this.errors)) {
    //Pasa la validación
    return false;
  }
  alert("Todo chido vamos registrar producto");
}
}
