
import { GlobalService } from './modulos/shared/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Tudo Aqui!';
  btn: any;
  navbar: any;
  backdrop: boolean = false;
  limpaTela: any;

  constructor(private globalService: GlobalService,
              private router: Router,
               ){

  }

  ngOnInit(): void {
    this.globalService.setId(2);
    this.router.navigate(['/login']);
  }

 ngAfterViewInit(): void{
     this.btn = document.querySelector('.navbar-toggler');
     this.navbar = document.querySelector('.navbar');

      this.btn.addEventListener('click', ()=> {
        this.fecharMenu();
      });
  }

  fecharMenu(){
    this.navbar.classList.toggle('sidebar-open');
    this.backdrop = !this.backdrop;
  }

  entrarPainel(){
    this.router.navigate(['/painel']);
    this.fecharMenu();
  }

  entrarMenu(){
    this.router.navigate(['/menu']);
    this.fecharMenu();
  }
}
