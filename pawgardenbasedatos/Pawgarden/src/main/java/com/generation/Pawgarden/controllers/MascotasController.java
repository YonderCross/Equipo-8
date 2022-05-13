package com.generation.Pawgarden.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.generation.Pawgarden.models.*;
import com.generation.Pawgarden.services.*;




@RestController
@RequestMapping("/mascota")
@CrossOrigin(origins = "*")
public class MascotasController {

    @Autowired
    MascotasService mascotasService;

    @GetMapping()
    public ArrayList<MascotasModel> obtenerMascotas(){
        return mascotasService.obtenerMascotas();
    }
    
    @PostMapping()
    public MascotasModel guardarMascotas(@RequestBody MascotasModel mascota){
        return this.mascotasService.guardarMascotas(mascota);
    }

    @GetMapping(path = "/{id}")
    public Optional<MascotasModel> obtenerMascotaPorId(@PathVariable("id") long id) {
        return this.mascotasService.obtenerPorId(id);        
    }

    @DeleteMapping(path= "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.mascotasService.eliminarMascota(id);
        if (ok){
            return "Se eliminó la mascota con id " + id;
        }
        else {
            return "No pudo eliminar la mascota con id" + id;
        }
    }
}
