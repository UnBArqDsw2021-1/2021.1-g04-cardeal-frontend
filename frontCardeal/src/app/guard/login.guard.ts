import { CorretorService } from 'src/app/services/corretor.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private service: CorretorService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.service.usuarioLogado()){
      return true;
    }
    else{
      this.router.navigate(['/meus-imoveis']);
      return false
    }
  }
}
