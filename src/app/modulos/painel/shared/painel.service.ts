import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  private readonly api = `${environment.api}/7475646f61717569/api/painel`;

  constructor(private http: HttpClient) { }


  createAgenda(agenda: any){
    return this.http.post(`${this.api}/agenda`, agenda).pipe(
      take(1)
    );
  }

  createTarefa(tarefa: any){
    return this.http.post(`${this.api}/tarefa`, tarefa).pipe(
      take(1)
    );
  }

  createFinanceiro(financeiro: any){
    return this.http.post(`${this.api}/financeiro`, financeiro).pipe(
      take(1)
    );
  }

  createAprender(aprender: any){
    return this.http.post(`${this.api}/aprender`, aprender).pipe(
      take(1)
    );
  }
}
