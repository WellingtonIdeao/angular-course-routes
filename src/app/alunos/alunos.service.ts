import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ]

  constructor() { }

  getAlunos(): any[] {
    return this.alunos;
  }
  getAluno(id: number): any {
    let alunos = this.getAlunos();
    for (let aluno of alunos){
        if (aluno.id == id){
          return aluno;
        }
    }
    return null;
  }
}
