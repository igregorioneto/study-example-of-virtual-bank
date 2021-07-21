import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  base_url: string = '';
  constructor(private authService: AuthService, private router: Router){}
  canActivate(): any{
    if(this.authService.isAuthenticated()) {
      return true
    } else {
      this.router.navigate(['/acesso-negado'])
    }
  }
  
}
