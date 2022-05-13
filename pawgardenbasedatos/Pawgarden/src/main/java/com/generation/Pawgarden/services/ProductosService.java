package com.generation.Pawgarden.services;

import java.util.ArrayList;
import java.util.Optional;

import com.generation.Pawgarden.models.ProductosModel;
import com.generation.Pawgarden.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {

    @Autowired
    ProductosRepository productosRepository;
    
    public ArrayList<ProductosModel> obtenerProductos(){
        return (ArrayList<ProductosModel>) productosRepository.findAll();
    }

    public ProductosModel guardarProductos(ProductosModel producto){
        return productosRepository.save(producto);
    }

    public Optional<ProductosModel> obtenerPorId(Long id){
        return productosRepository.findById(id);
    }

    public boolean eliminarProducto(Long id){
        try{
            productosRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
