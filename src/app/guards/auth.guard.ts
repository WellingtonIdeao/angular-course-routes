import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private route: Router
  ){}
 
  private verificarAcesso(): boolean{
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |  Observable<boolean>{
    console.log('AuthGuard');
    return this.verificarAcesso();    
  } 
  
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: verificando o usuário pode carregar o cod módulo');
    return this.verificarAcesso();
  }
}
