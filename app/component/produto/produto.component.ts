import { Component, OnInit } from '@angular/core';
import {Produto} from "../../models/produto.model";
import {ProdutoService} from "../../services/produto.service";
import {FormControl} from "@angular/forms";



@Component({
    selector: 'app-produto',
    styleUrls: ['./produto.component.css'],
    templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  produto: Produto = new Produto();
    quantidade: FormControl;
    descricao: FormControl;
    preco: FormControl;
    nome: FormControl;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.produtoService.getAll().subscribe(
        data => {
          this.produtos = data;
        },
        error => {
          console.error('Error loading produtos', error);
        }
    );
  }

  saveProduto(): void {
    this.produtoService.create(this.produto).subscribe(
        data => {
          console.log('Produto salvo com sucesso!');
          this.produto = new Produto();
          this.loadProdutos();
        },
        error => {
          console.error('Error saving produto', error);
        }
    );
  }
}
