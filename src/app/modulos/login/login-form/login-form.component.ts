import { GlobalService } from './../../shared/global.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    nome: [''],
    senha: ['']
  });

  usuarioForm = this.fb.group({
    nome: [''],
    sobreNome: [''],
    dataDeNascimento: [''],
    email: [''],
    senha: ['']
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  logar() {
    console.log(this.loginForm.value)
    this.router.navigate(['/menu']);
  }

  salvar(){
    if(this.usuarioForm.valid){
      console.log(this.usuarioForm.value);
      this.globalService.create(this.usuarioForm.value).subscribe(success=>{

      });
    }
    this.usuarioForm.reset();
  }
}
