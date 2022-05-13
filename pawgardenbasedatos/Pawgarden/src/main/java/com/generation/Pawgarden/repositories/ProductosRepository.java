package com.generation.Pawgarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.Pawgarden.models.ProductosModel;

@Repository
public interface ProductosRepository extends CrudRepository<ProductosModel, Long>{
    
}
