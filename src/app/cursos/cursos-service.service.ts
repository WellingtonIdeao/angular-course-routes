import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {
  
  constructor() { }

  getCursos(): any{
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number): any{
    let cursos = this.getCursos();
    for ( let curso of cursos){
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }
}
