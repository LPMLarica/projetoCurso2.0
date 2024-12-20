package com.helpdesk.helpdesk.domain.dtos;

import com.helpdesk.helpdesk.domain.Pedidos;

import java.time.LocalDateTime;

public class PedidoDTO {

    private Long id;
    private String descricao;
    private Double valor;
    private LocalDateTime dataCriacao;

    public PedidoDTO() {}

    public PedidoDTO(Pedidos pedido) {
        this.id = pedido.getId();
        this.descricao = pedido.getDescricao();
        this.valor = pedido.getValor();
        this.dataCriacao = pedido.getDataCriacao();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }
}