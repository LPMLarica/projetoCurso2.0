import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cpf-cnpj',
  templateUrl: './cpf-cnpj.component.html',
  styleUrls: ['./cpf-cnpj.component.css']
})
export class cpfcnpjComponent {
  @Input()
  value: string = '';
  message: string = '';


  cpfcnpj: FormControl = new FormControl(this.value, [Validators.required]);
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();


  onInputChange() {
    this.value = this.cpfcnpj.value;
    this.valueChange.emit(this.value);
    this.validate();
  }

  validate() {
    const cleanedInput = this.value.replace(/\D/g, '');

    if (cleanedInput.length === 11) {
      this.message = this.isValidCPF(cleanedInput) ? 'CPF válido!' : 'CPF inválido!';
    } else if (cleanedInput.length === 14) {
      this.message = this.isValidCNPJ(cleanedInput) ? 'CNPJ válido!' : 'CNPJ inválido!';
    } else {
      this.message = 'Entrada inválida! Deve ser um CPF ou CNPJ.';
    }
  }

  isValidCPF(cpf: string): boolean {
    if (/^(\d)\1+$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
    let firstCheck = (sum * 10) % 11;
    if (firstCheck === 10) firstCheck = 0;
    if (firstCheck !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
    let secondCheck = (sum * 10) % 11;
    if (secondCheck === 10) secondCheck = 0;
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
