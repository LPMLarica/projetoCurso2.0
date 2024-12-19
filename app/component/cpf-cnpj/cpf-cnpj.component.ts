import {Component, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-cpf-cnpj',
    templateUrl: './cpf-cnpj.component.html',
    styleUrls: ['./cpf-cnpj.component.css']
})
export class CpfCnpjComponent {

    @Input()
    value: string = '';

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    message: string = '';


    cpfcnpj: FormControl = new FormControl('', [Validators.required]);

    setValue(event) {
        if (event && event != this.value){
            this.value = event
            this.valueChange.emit(this.value)
            const cleanedInput = event.replace(/\D/g, '');
            if (this.validate(cleanedInput)){

            }
        }
        console.log(this.value)

    }

    // cpfcnpjvalidate(event): void {
    //     // if (event && this.value != event) {
    //     if (event && event != this.value) {
    //         const cleanedInput = event.replace(/\D/g, '');
    //         if (this.validate(cleanedInput)) {
    //             this.value = event
    //             this.valueChange.emit(this.value)
    //         }
    //     }
    // }


    validate(cleanedInput): boolean {

        if (cleanedInput.length === 11) {
            if (this.isValidCPF(cleanedInput)) {
                this.message = 'Cpf Valido'
                return true
            } else {
                this.message = `Cpf Invalido`
                return false
            }
        } else if (cleanedInput.length === 14) {
            if (this.isValidCNPJ(cleanedInput)) {
                this.message = 'Cnpj Valido'
                return true
            } else {
                this.message = 'Cnpj Invalido'
                return false
            }
        }
        return false;
    }


    isValidCPF(cpf: string): boolean {
        if (/^(\d)\1+$/.test(cpf)) return false;
        let sum = 0;


        for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
        let firstCheck = (sum * 10) % 11;
        firstCheck = firstCheck === 10 ? 0 : firstCheck;
        if (firstCheck !== parseInt(cpf[9])) return false;


        sum = 0;
        for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
        let secondCheck = (sum * 10) % 11;
        secondCheck = secondCheck === 10 ? 0 : secondCheck;

        return secondCheck === parseInt(cpf[10]);
    }

    isValidCNPJ(cnpj: string): boolean {
        if (/^(\d)\1+$/.test(cnpj)) return false;

        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        const calcCheckDigit = (digits: string, weights: number[]): number => {
            const sum = digits
                .split('')
                .reduce((acc, digit, index) => acc + parseInt(digit) * weights[index], 0);
            const checkDigit = sum % 11;
            return checkDigit < 2 ? 0 : 11 - checkDigit;
        };

        const base = cnpj.slice(0, 12);
        const firstCheck = calcCheckDigit(base, weights1);
        const secondCheck = calcCheckDigit(base + firstCheck, weights2);

        return firstCheck === parseInt(cnpj[12]) && secondCheck === parseInt(cnpj[13]);
    }
}
