import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosGuard } from '../guards/alunos.guard';

const routes: Routes = [
    /*{ path: 'alunos', component: AlunosComponent,
     children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent },
    ]},*/
    { 
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { 
                path: 'novo',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            },
            { path: ':id', component: AlunoDetalheComponent },
            { 
                path: ':id/editar',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}
