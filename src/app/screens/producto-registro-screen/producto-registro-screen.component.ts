import { productosService } from './../../services/productos.service';
import { ValidatorService } from './../../services/tools/validator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var $: any;
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
  private ProductosService: productosService
) { }

ngOnInit (): void {
  this.producto = this.ProductosService.esquemaProducto();
    console.log("Producto: ", this.producto);
}

public regresar() {
  this.location.back();
}


public registrar() { //No todas las rutas de acceso devuelven un valor
  this.errors = [];

  this.errors = this.ProductosService.validarProducto(this.producto);
  if (!$.isEmptyObject(this.errors)) {
    //Pasa la validación
    return false;
  }
}
}
