import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Produto } from './../../models/produto.model';
import { ProdutoService } from './../../services/produto.service';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
    produtos: Produto[] = [];
    produtoForm: FormGroup;
    displayedColumns: Iterable<string>;

    constructor(private produtoService: ProdutoService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
        this.loadProdutos();
    }

    initForm(): void {
        this.produtoForm = this.fb.group({
            nome: ['', Validators.required],
            preco: ['', Validators.required],
            quantidade: ['', Validators.required],
            descricao: ['', Validators.required]
        });
    }

    loadProdutos(): void {
        this.produtoService.getAll().subscribe(
            (produtos) => {
                this.produtos = produtos;
            },
            (error) => {
                console.error('Erro ao carregar produtos', error);
            }
        );
    }

    saveProduto(): void {
        if (this.produtoForm.valid) {
            const produto: Produto = this.produtoForm.value;
            this.produtoService.create(produto).subscribe(
                () => {
                    this.loadProdutos();
                },
                (error) => {
                    console.error('Erro ao salvar produto', error);
                }
            );
        }
    }
}
