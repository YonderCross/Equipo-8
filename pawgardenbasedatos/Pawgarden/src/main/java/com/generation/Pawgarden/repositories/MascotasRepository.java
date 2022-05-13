package com.generation.Pawgarden.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.Pawgarden.models.MascotasModel;

@Repository
public interface MascotasRepository extends CrudRepository<MascotasModel, Long>{
    
}

