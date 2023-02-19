import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@common/auth/types/user';
import { AppHttpClient } from '@common/core/http/http.service';
import { BehaviorSubject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn = false;
  public loading$ = new BehaviorSubject(false);
  public redirect: string | null = null;
  public user?: User;
  public error?: string;

  constructor(private router:Router,private http: AppHttpClient) {}

  public init() {
    this.http.get<UserResponse>('auth/me').subscribe(data => {
      this.handleLogin(data)
    })
  }

  public login(username: string, password: string) {
    this.loading$.next(true);
    this.http
      .post<UserResponse>('auth/login', {
        email: username,
        password: password,
      })
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.handleLogin(response)
          } else {
            this.error = response.error;
          }
        },
        error: (error) => {
          this.error = error.error;
          this.loading$.next(false)
        },
        complete: () => {
          this.loading$.next(false);
        },
      });
  }

  public register(email:string,firstname: string,lastname:string, password: string, password2: string) {
    this.loading$.next(true);
    return this.http
      .post<UserResponse>('auth/register', {
        first_name: firstname,
        last_name: lastname,
        email:email,
        password: password,
        password2: password2,
      }).pipe(finalize(() => this.loading$.next(false)));
  }

  public logout() {
    this.http.post('auth/logout', {}).subscribe(() => {
      this.loggedIn = false;
      this.user = null;
      this.redirect = null;
      this.error = null;
      this.loading$.next(false);
    });
  }

  private handleLogin(response: UserResponse) {
    if (response.success) {
      this.user = response.user;
      this.loggedIn = true;
    } else {
      this.error = response.error;
    }
    this.router.navigate([this.redirect ? this.redirect : '/home']);
  }
}

interface UserResponse {
  success: boolean;
  user?: User;
  error?: string;
  needEmailConfirmation?: boolean;
}
