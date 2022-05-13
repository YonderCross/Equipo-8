package com.generation.Pawgarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.Pawgarden.models.PedidosModel;

@Repository
public interface PedidosRepository extends CrudRepository<PedidosModel, Long>{
    
}
