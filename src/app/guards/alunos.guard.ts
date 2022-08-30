import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        //console.log('guarda de rota filha');
        console.log(childRoute);
        console.log(state);

       /* if(state.url.includes('editar')){
            alert('Usuário sem acesso');
            //return false;
            return Observable.create( ()=>false);   
        } */
        return true;
    }

}
