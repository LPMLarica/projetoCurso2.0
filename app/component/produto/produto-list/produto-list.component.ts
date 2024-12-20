import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto.model';

@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css']
})
export class ProdutoListaComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(private produtoService: ProdutoService) {}

    ngOnInit(): void {
        this.loadProdutos();
    }

    loadProdutos(): void {
        this.produtoService.getAll().subscribe(
            data => {
                this.produtos = data;
            },
            error => {
                console.error('Erro ao carregar produtos', error);
            }
        );
    }
}
