import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(private navigator: NavController) {

    }

    login() {
        // Add logic to login here.
        this.navigator.setRoot('IndexPage');
    }
}
