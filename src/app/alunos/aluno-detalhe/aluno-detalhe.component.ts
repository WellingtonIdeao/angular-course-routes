import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any = {};
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
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  
  editarContato(){
    this.route.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  


}
