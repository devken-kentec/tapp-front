import { Tarefa } from './../../shared/tarefa';
import { take } from 'rxjs/operators';
import { Agenda } from '../../shared/agenda';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private readonly api = `${environment.api}/7475646f61717569/api/listas`;

  constructor(private http: HttpClient) { }

  listarAgendaId(id: number){
    return this.http.get(`${this.api}/listarAgendaId/${id}`).pipe(
      take(1)
    );
  }

  listarAgenda(idUsuario: number){
    return this.http.get<Agenda[]>(`${this.api}/listarAgenda/${idUsuario}`).pipe(
      take(1)
    );
  }

  buscaAvancada(data: string){

    const httpParams = new HttpParams()
    .set("data", data);

    const url = this.api + "/buscar?" + httpParams;

    return this.http.get<Agenda[]>(url).pipe(
      take(1)
    );
  }

  updateAgenda(agenda: any){
    return this.http.put(`${this.api}/alterarAgenda`, agenda).pipe(
      take(1)
    );
  }

  removeAgenda(id: number){
    return this.http.delete(`${this.api}/excluirAgenda/${id}`).pipe(
      take(1)
    );
  }

  listarTarefa(idUsuario: number){
    return this.http.get<Tarefa[]>(`${this.api}/listarTarefa/${idUsuario}`).pipe(
      take(1)
    );
  }

  listarTarefaId(id: number){
    return this.http.get(`${this.api}/listarTarefaId/${id}`).pipe(
      take(1)
    );
  }

}
