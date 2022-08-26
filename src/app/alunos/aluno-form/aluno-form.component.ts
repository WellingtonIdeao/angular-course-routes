import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: any;
  inscricao!: Subscription

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

}
