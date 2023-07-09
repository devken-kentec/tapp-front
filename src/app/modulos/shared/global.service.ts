import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  id: any;

  private readonly api = `${environment.api}/7475646f61717569/api`;

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  setId(id: number):number {
    this.id = id;
    return id;
  }

  getId():number {
    return this.id;
  }

  create(usuario: any){
    return this.http.post(`${this.api}/usuario`, usuario).pipe(
      take(1)
    );
  }


  saveShow(mensagem: string, titulo: string){
    this.toastr.success(mensagem, titulo);
  }

  removeShow(mensagem: string, titulo: string){
    this.toastr.error(mensagem, titulo)
  }

  warningShow(mensagem: string, titulo: string){
    this.toastr.warning(mensagem, titulo)
  }
}
