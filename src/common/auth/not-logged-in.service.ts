import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedIn implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
   
    return new Observable<boolean>((observer) => {
      this.authService.loading$.subscribe({
        next: (loading) => {
          if (!loading) {
            if (!this.authService.loggedIn) {
              observer.next(true);
            } else {
              this.router.navigateByUrl('/home');
              observer.next(false);
            }
            observer.complete();
          }
        },
      });
    }
    );
    
  }
}