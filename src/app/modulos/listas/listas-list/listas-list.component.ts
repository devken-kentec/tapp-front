import { Tarefa } from './../../shared/tarefa';
import { FormBuilder } from '@angular/forms';
import { GlobalService } from './../../shared/global.service';
import { ListasService } from './../shared/listas.service';
import { Agenda } from './../../shared/agenda';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas-list',
  templateUrl: './listas-list.component.html',
  styleUrls: ['./listas-list.component.css'],
  preserveWhitespaces: true
})
export class ListasListComponent implements OnInit {

  agendas: Agenda[] = [];
  tarefas: Tarefa[] = [];
  mostrarMes: boolean = false;
  mostrarMesExclusao: boolean = false;
  assunto: any;
  idExclusao: any;

  agendaForm = this.fb.group({
    data: ['']
  });

  _agendaForm = this.fb.group({
    id: [''],
    data: [''],
    hora: [''],
    assunto: [''],
    descricao: [''],
    usuarioId: ['']
  });

  _tarefaForm = this.fb.group({
    inicio: [''],
    entrega: [''],
    hora: [''],
    prioridade: [''],
    descricao: [''],
    observacao: [''],
    statusTarefa: [''],
    usuarioId: ['']
  });

  constructor(private router: Router,
              private listasService: ListasService,
              private globalService: GlobalService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
      this.listarAgenda(this.globalService.getId());
      this.listarTarefa(this.globalService.getId());
  }

  voltar(){
    this.router.navigate(['/menu']);
  }

  listarAgenda(idUsuario: number){
    this.listasService.listarAgenda(idUsuario).subscribe(
       res => this.agendas = res
    );
  }

  pesquisarAgenda(){
      this.listasService.buscaAvancada(this.agendaForm.value.data).subscribe(
        res => this.agendas = res
      );
  }

  pegarIdAgenda(id: number){
      this.listasService.listarAgendaId(id).subscribe((dados: any)=> {
          this.updateAgendaForm(dados)
      });
  }

  pegarIdExclusao(id: number, assunto: string){
    this.idExclusao = id;
    this.assunto = assunto;
  }

  atualizarAgenda(){
    this.listasService.updateAgenda(this._agendaForm.value).subscribe(
      success => {
        this.mostrarMes = !this.mostrarMes,
        this.listarAgenda(this.globalService.getId()),
        setTimeout(()=>{
          this.mostrarMes = !this.mostrarMes;
        }, 3000)
      }
    );
      this._agendaForm.reset();
  }

  updateAgendaForm(agenda: Agenda){
    this._agendaForm.patchValue(agenda);
  }

  excluirAgenda(){
    this.listasService.removeAgenda(this.idExclusao).subscribe(
      success=> {
        this.mostrarMesExclusao = !this.mostrarMesExclusao,
        this.listarAgenda(this.globalService.getId()),
        setTimeout(()=>{
          this.mostrarMesExclusao = !this.mostrarMesExclusao;
        }, 3000)
      }
    );
  }

  listarTarefa(id: number){
    this.listasService.listarTarefa(id).subscribe(
      res => this.tarefas = res
    );
  }

  pegarIdTarefa(id: number){
    this.listasService.listarTarefaId(id).subscribe((dados: any)=> {
      this.updateTarefaForm(dados)
  });
  }

  pegarIdExclusaoTarefa(id: number, assunto: string){

  }

  pesquisarTarefa(){

  }

  atualizarTarefa(){

  }

  excluirTarefa(){

  }

  updateTarefaForm(tarefa: Tarefa){
    this._tarefaForm.patchValue(tarefa);
  }
}
