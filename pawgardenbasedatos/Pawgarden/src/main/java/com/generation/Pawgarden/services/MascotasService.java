package com.generation.Pawgarden.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.Pawgarden.models.MascotasModel;
import com.generation.Pawgarden.repositories.MascotasRepository;

@Service
public class MascotasService {

    @Autowired
    MascotasRepository mascotasRepository;
    
    public ArrayList<MascotasModel> obtenerMascotas(){
        return (ArrayList<MascotasModel>) mascotasRepository.findAll();
    }

    public MascotasModel guardarMascotas(MascotasModel mascota){
        return mascotasRepository.save(mascota);
    }

    public Optional<MascotasModel> obtenerPorId(Long id){
        return mascotasRepository.findById(id);
    }

    public boolean eliminarMascota(Long id){
        try{
            mascotasRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
