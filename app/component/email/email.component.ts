import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, ValidatorFn, Validators} from "@angular/forms";

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent {

    @Input()
    value: string = '';
    email: FormControl = new FormControl(this.value, [
        Validators.required,
        Validators.email
    ]);

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();


    sendEmail() {
        if (this.email.valid) {
            console.log(`Email enviado para: ${this.email.value}`);
        } else {
            console.error("Endereço de email inválido.");
        }
    }

    setValue(event) {
        if (event && event != this.value){
            this.value = event
            this.valueChange.emit(this.value)

        }
    }
}
