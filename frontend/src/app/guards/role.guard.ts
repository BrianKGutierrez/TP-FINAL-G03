import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

interface Data {
    [key: string]: any;
}

interface RouteData extends Data {
    expectedRole: string;
}

@Injectable({
    providedIn: 'root',
})
export class RoleGuard {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate: CanActivateFn = (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
        const expectedRole = route.data['expectedRole'] as string;
        const userRole = this.loginService.getUserRole();

        if (userRole === expectedRole) {
            return true;
        } else {
            this.router.navigate(['/unauthorized']);
            return false;
        }
    };
}
