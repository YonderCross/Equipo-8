package com.generation.Pawgarden.services;

import java.util.ArrayList;
import java.util.Optional;

import com.generation.Pawgarden.models.PedidosModel;
import com.generation.Pawgarden.repositories.PedidosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidosService {
    
    @Autowired
    PedidosRepository pedidosRepository;
    
    public ArrayList<PedidosModel> obtenerPedidos(){
        return (ArrayList<PedidosModel>) pedidosRepository.findAll();
    }

    public PedidosModel guardarPedidos(PedidosModel pedido){
        return pedidosRepository.save(pedido);
    }

    public Optional<PedidosModel> obtenerPorId(Long id){
        return pedidosRepository.findById(id);
    }

    public boolean eliminarPedido(Long id){
        try{
            pedidosRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
