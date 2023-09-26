import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-login-screen',
  templateUrl: './nuevo-login-screen.component.html',
  styleUrls: ['./nuevo-login-screen.component.scss']
})
export class NuevoLoginScreenComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
