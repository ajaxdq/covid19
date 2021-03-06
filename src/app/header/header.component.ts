import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private authService: AuthService) { }

    collapsed = true;

    token = localStorage.getItem('access_token');
    logout() {
        this.authService.logout()
        this.token = localStorage.getItem('access_token');
    }

}