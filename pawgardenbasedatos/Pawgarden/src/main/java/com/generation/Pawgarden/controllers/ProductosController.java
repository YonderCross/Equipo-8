package com.generation.Pawgarden.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.generation.Pawgarden.models.ProductosModel;
import com.generation.Pawgarden.services.ProductosService;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "*")
public class ProductosController {

    @Autowired
    ProductosService productosService;

    @GetMapping()
    public ArrayList<ProductosModel> obtenerProductos(){
        return productosService.obtenerProductos();
    }
    
    @PostMapping()
    public ProductosModel guardarProductos(@RequestBody ProductosModel producto){
        return this.productosService.guardarProductos(producto);
    }

    @GetMapping(path = "/{id}")
    public Optional<ProductosModel> obtenerProductoPorId(@PathVariable("id") long id) {
        return this.productosService.obtenerPorId(id);        
    }

    @DeleteMapping(path= "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.productosService.eliminarProducto(id);
        if (ok){
            return "Se elimino el producto con id " + id;
        }
        else {
            return "No pudo eliminar el producto con id" + id;
        }
    }
}
