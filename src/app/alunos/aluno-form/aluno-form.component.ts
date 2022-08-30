import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any)=> {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
        if(this.aluno ==  null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(): boolean {
    console.log("Form mudou");
    return this.formMudou = true;
    
  }

  podeMudarRota(): boolean {
    if (this.formMudou){
      confirm("Tem certeza que  deseja sair dessa página");
    }
    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }


}
