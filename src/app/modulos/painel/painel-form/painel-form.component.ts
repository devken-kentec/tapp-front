import { PainelService } from './../shared/painel.service';
import { GlobalService } from './../../shared/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-form',
  templateUrl: './painel-form.component.html',
  styleUrls: ['./painel-form.component.css']
})
export class PainelFormComponent implements OnInit {

  indica = "";
  statusPag: boolean = false;
  statusRec: boolean = false;
  id: number = 0;

  agendaForm = this.fb.group({
    data: [''],
    hora: [''],
    assunto: [''],
    descricao: [''],
    usuarioId: ['']
  });

  tarefaForm = this.fb.group({
    inicio: [''],
    entrega: [''],
    hora: [''],
    prioridade: [''],
    descricao: [''],
    observacao: [''],
    statusTarefa: [''],
    usuarioId: ['']
  });

  financasForm = this.fb.group({
      recurso:[''],
      data: [''],
      tipo: [''],
      referente: [''],
      valor: [''],
      documento: [''],
      descricao: [''],
      vencimento: [''],
      status: [''],
      usuarioId: ['']
  })

  aprendeForm = this.fb.group({
      modalidade: [''],
      data: [''],
      titulo: [''],
      url: [''],
      descricao: [''],
      usuarioId: ['']

  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private globalService: GlobalService,
              private painelService: PainelService) {

  }

  ngOnInit(): void {
    this.id = this.globalService.getId();
    this.agendaForm.patchValue({usuarioId: this.id});
    this.tarefaForm.patchValue({usuarioId: this.id});
    this.financasForm.patchValue({usuarioId: this.id});
    this.aprendeForm.patchValue({usuarioId: this.id});
  }

  salvarAgenda(){
    if(this.agendaForm.valid){
        this.painelService.createAgenda(this.agendaForm.value).subscribe(
          success => { this.globalService.saveShow('Salvo com Sucesso!', 'Agenda')}
        );
        this.agendaForm.reset();
    }
  }

  salvarTarefa(){
    if(this.tarefaForm.valid){
      this.painelService.createTarefa(this.tarefaForm.value).subscribe(
        success => { this.globalService.saveShow('Salvo com Sucesso!', 'Tarefa')}
      );
      this.tarefaForm.reset();
    }
  }

  salvarFinanceiro(){
    if(this.financasForm.valid){
      this.painelService.createFinanceiro(this.financasForm.value).subscribe(
        success => { this.globalService.saveShow('Salvo com Sucesso!', 'Financeiro')}
      );
      this.financasForm.reset();
    }
  }

  salvarAprendizado(){
    if(this.aprendeForm.valid){
      this.painelService.createAprender(this.aprendeForm.value).subscribe(
        success => { this.globalService.saveShow('Salvo com Sucesso!', 'URL')}
      );
    }
    this.aprendeForm.reset();
  }

  direcionar(){
    let escolha = this.financasForm.value.tipo;
    if(escolha === "Recebimento" ){
      this.indica = "Recebimento";
      this.statusRec = true;
    } else if (escolha === "Pagamento"){
      this.indica = "Pagamento";
      this.statusPag = true;
    }
  }

  voltar(){
    this.router.navigate(['/menu']);
  }

  limpar(){
    this.indica = "";
    this.statusPag = false;
    this.statusRec = false;
  }

}
