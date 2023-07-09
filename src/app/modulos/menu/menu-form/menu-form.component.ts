import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  entrarPainel(){
    this.router.navigate(['/painel'])
  }

  entrarConsultas(){
    this.router.navigate(['/listas'])
  }

  sair(){

  }
}
