import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthorized$$ = new BehaviorSubject<boolean>(false);
    public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

    constructor(private sessionStorageService: SessionStorageService, private http:HttpClient){}
    apiUrl:string='BASE_API_URL';
  
    login(user: any) { // replace 'any' with the required interface
        // Add your code here
        return this.http.post(this.apiUrl + '/login', { user})
      .pipe(tap((res: any) => {
        this.sessionStorageService.setToken(res.token);
        this.isAuthorized$$.next(true);
      }));
    }

    logout() {
        // Add your code here
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
        return this.http.post(this.apiUrl + '/logout', {});
    }

    register(user: any) { // replace 'any' with the required interface
        // Add your code here
        return this.http.post(this.apiUrl + '/register', { user })
        .pipe(tap((res: any) => {
          this.sessionStorageService.setToken(res.token);
          this.isAuthorized$$.next(true);
        }));
    }

    get isAuthorised() {
        // Add your code here. Get isAuthorized$$ value
        return this.isAuthorized$$.value;
    }

    set isAuthorised(value: boolean) {
        // Add your code here. Change isAuthorized$$ value
       this.isAuthorized$$.next(value);
    }

    getLoginUrl() {
        // Add your code here
    }
}
