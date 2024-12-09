package com.helpdesk.helpdesk.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.helpdesk.helpdesk.domain.Chamado;
import com.helpdesk.helpdesk.domain.Cliente;
import com.helpdesk.helpdesk.domain.Tecnico;
import com.helpdesk.helpdesk.domain.enums.Perfil;
import com.helpdesk.helpdesk.domain.enums.Prioridade;
import com.helpdesk.helpdesk.domain.enums.Status;
import com.helpdesk.helpdesk.repositories.ChamadoRepository;
import com.helpdesk.helpdesk.repositories.PessoaRepository;

@Service
public class DBService {

    @Autowired
    private ChamadoRepository chamadoRepository;
    @Autowired
    private PessoaRepository pessoaRepository;
    @Autowired
    private BCryptPasswordEncoder encoder;

    public void instanciaDB() {

        Tecnico tec1 = new Tecnico(null, "Larissa Campos", "126.216.806.66", "larissacamposcardoso@gmail.com", encoder.encode("123"));
        tec1.addPerfil(Perfil.ADMIN);

        Cliente cli1 = new Cliente(null, "Albert Einstein", "111.661.890-74", "einstein@mail.com", encoder.encode("123"));

        Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 1", "Teste chamado 1", tec1, cli1);

        pessoaRepository.saveAll(Arrays.asList(tec1, cli1));
        chamadoRepository.saveAll(Arrays.asList(c1));
    }
}
