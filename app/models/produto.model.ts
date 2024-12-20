export class Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  estoque: number;

  constructor(id?: number, nome?: string, preco?: number, quantidade?: number, descricao?: string) {
    this.id = id || 0;
    this.nome = nome || '';
    this.preco = preco || 0.0;
    this.quantidade = quantidade || 0;
    this.descricao = descricao || '';
  }
}
