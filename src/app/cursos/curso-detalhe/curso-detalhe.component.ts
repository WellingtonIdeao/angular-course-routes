import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router ,private cursosService: CursosService) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) =>{
        this.id = params['id']
        this.curso = this.cursosService.getCurso(this.id);
        if (this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
