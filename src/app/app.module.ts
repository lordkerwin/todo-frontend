import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './helpers/auth.guard';

export function initApp(http: HttpClient) {
    return () => {
        // if current user is set in localStorage, we need to check its real!
        if (localStorage.getItem('currentUser')) {
            // Set Headers
            // const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
            // const token = currentUser.token;
            // let headers: HttpHeaders = new HttpHeaders();
            // headers = headers.append('Accept', 'application/json');
            // headers = headers.append('Authorization', 'Bearer ' + token);
            // // make request to backend
            // return http.get(environment.ps_backend + 'user', {headers}).toPromise()
            //     .then(() => {
            //         // if we get a good response.
            //         console.log('User is Valid');
            //     }).catch(() => {
            //         // if we get a bad response.
            //         localStorage.removeItem('currentUser');
            //         console.clear();
            //         console.log('Local Storage cleared due to 401 on User Request');
            //     });
        }


    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initApp,
            multi: true,
            deps: [HttpClient]
        },
        DataService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
