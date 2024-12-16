import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-verificador-nome',
    templateUrl: 'verificador-nome.component.html',
    styleUrls: ['./verificador-nome.component.css']
})
export class VerificadorNomeComponent {

    @Input()
    value: string = '';
    mensagem: string = '';
    nome: FormControl = new FormControl(this.value, [
        Validators.required,
        Validators.minLength(3)
    ]);


    @Output()
    valueChange: EventEmitter<string> = new EventEmitter<string>();

    onInputChange() {
        this.value = this.nome.value;
        this.valueChange.emit(this.value);
        this.verificarNome();
    }

    verificarNome() {
        if (this.nome.invalid || !this.nome.value) {
            this.mensagem = 'Por favor, insira um nome válido com pelo menos 3 caracteres.';
            return;
        }

        const primeiraLetra = this.nome.value.charAt(0);
        if (primeiraLetra === primeiraLetra.toUpperCase() && /[A-Z]/.test(primeiraLetra)) {
            this.mensagem = 'A primeira letra está maiúscula!';
        } else {
            this.mensagem = 'A primeira letra não está maiúscula!';
        }
    }

    ngonInit() {
        this.nome.setValue(this.value);
    }
}
