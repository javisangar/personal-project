import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CanActivate, Router  } from '@angular/router';
import { AuthService } from '../services/auth.services';


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router:Router, private authService: AuthService) {}

  redirect(url) {
    this.router.navigateByUrl(url);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<any> {

    if (this.authService.token) {
      return this.authService.getUser().then(data => true);
    } else {
      this.redirect ('login');
      return false;
    }
  }
}
