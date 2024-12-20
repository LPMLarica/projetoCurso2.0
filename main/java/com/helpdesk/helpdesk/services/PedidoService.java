package com.helpdesk.helpdesk.services;

import com.helpdesk.helpdesk.domain.Pedidos;
import com.helpdesk.helpdesk.domain.dtos.PedidoDTO;
import com.helpdesk.helpdesk.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repository;

    public List<PedidoDTO> findAll() {
        return repository.findAll().stream().map(PedidoDTO::new).collect(Collectors.toList());
    }

    public PedidoDTO findById(Long id) {
        Optional<Pedidos> pedido = repository.findById(id);
        return pedido.map(PedidoDTO::new).orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
    }

    public PedidoDTO create(PedidoDTO dto) {
        Pedidos pedido = new Pedidos();
        pedido.setDescricao(dto.getDescricao());
        pedido.setValor(dto.getValor());
        pedido.setDataCriacao(LocalDateTime.now());
        return new PedidoDTO(repository.save(pedido));
    }

    public PedidoDTO update(Long id, PedidoDTO dto) {
        Pedidos pedido = repository.findById(id).orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
        pedido.setDescricao(dto.getDescricao());
        pedido.setValor(dto.getValor());
        return new PedidoDTO(repository.save(pedido));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}