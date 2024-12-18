package com.helpdesk.helpdesk.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.helpdesk.domain.Produto;
import com.helpdesk.helpdesk.repositories.ProdutoRepository;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Produto findById(Long id) {
        Optional<Produto> produto = produtoRepository.findById(Math.toIntExact(id));
        return produto.orElseThrow(() -> new RuntimeException("Produto não encontrado! ID: " + id));
    }

    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto update(Long id, Produto produto) {
        Produto produtoExistente = findById(id);
        produtoExistente.setNome(produto.getNome());
        produtoExistente.setPreco(produto.getPreco());
        produtoExistente.setQuantidade(produto.getQuantidade());
        produtoExistente.setDescricao(produto.getDescricao());
        return produtoRepository.save(produtoExistente);
    }

    public void delete(Long id) {
        Produto produto = findById(id);
        produtoRepository.delete(produto);
    }
}
