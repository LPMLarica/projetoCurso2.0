package com.helpdesk.helpdesk.repositories;

import com.helpdesk.helpdesk.domain.Pedidos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedidos, Long> {
}