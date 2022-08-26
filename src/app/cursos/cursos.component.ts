import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos!: any[];
  pagina: number = 0;
  inscricao!: Subscription;

  constructor(private cursosService: CursosService, private activatedRoute: ActivatedRoute, private route: Router) { }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  proximaPagina(): any {
    //this.pagina++;
    this.route.navigate(['/cursos'], { queryParams: {'pagina': ++this.pagina} });
  }

}
