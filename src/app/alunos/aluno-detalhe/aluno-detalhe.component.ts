import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

import { AlunosService } from './../alunos.service';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao!: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    /* this.inscricao = this.activatedRoute.params.subscribe(
      (params: any)=> {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    ); */

    console.log('ngOnInit: AlunoDetalheComponent');
    this.inscricao = this.activatedRoute.data.subscribe(
      (data: any) =>{
        console.log('Recebendo o obj Aluno do Resolver'); 
        this.aluno = data.aluno;
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
