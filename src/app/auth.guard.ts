import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  base_url: string = '';
  constructor(private authService: AuthService, private router: Router){}
  canActivate(){
    if(this.authService.isAuthenticated()) {
      return true
    } else {
      this.router.navigate(['/acesso-negado'])
    }
  }
  
}
