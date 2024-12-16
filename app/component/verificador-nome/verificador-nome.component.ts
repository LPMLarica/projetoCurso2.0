import { Component } from '@angular/core';

@Component({
    selector: 'app-verificador-nome',
    templateUrl: './verificador-nome.component.html',
    styleUrls: ['./verificador-nome.component.css']
})
export class VerificadorNomeComponent {
    nome: string = '';
    mensagem: string = '';

    verificarNome() {
        if (!this.nome) {
            this.mensagem = 'Por favor, insira um nome.';
            return;
        }

        const primeiraLetra = this.nome.charAt(0);
        if (primeiraLetra === primeiraLetra.toUpperCase() && /[A-Z]/.test(primeiraLetra)) {
            this.mensagem = 'A primeira letra está maiúscula!';
        } else {
            this.mensagem = 'A primeira letra não está maiúscula!';
        }
    }
}

