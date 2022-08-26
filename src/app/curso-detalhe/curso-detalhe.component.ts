import { CursosServiceService } from './../cursos/cursos-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;
  inscricao!: Subscription;
  curso: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private cursosService: CursosServiceService) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) =>{
        this.id = params['id']
        this.curso = this.cursosService.getCurso(this.id);
        if (this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
