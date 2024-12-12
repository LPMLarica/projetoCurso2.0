import { Component } from '@angular/core';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent {
    emailAddress: string = '';

    sendEmail() {
        console.log(`Email enviado para: ${this.emailAddress}`);
    }
}
