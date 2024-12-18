package com.helpdesk.helpdesk.repositories;

import com.helpdesk.helpdesk.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}