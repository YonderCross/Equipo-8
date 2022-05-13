package com.generation.Pawgarden.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.generation.Pawgarden.models.PedidosModel;
import com.generation.Pawgarden.services.PedidosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(origins = "*")
public class PedidosController {
    
    @Autowired
    PedidosService pedidosService;

    @GetMapping()
    public ArrayList<PedidosModel> obtenerPedidos(){
        return pedidosService.obtenerPedidos();
    }
    
    @PostMapping()
    public PedidosModel guardarPedidoss(@RequestBody PedidosModel pedido){
        return this.pedidosService.guardarPedidos(pedido);
    }

    @GetMapping(path = "/{id}")
    public Optional<PedidosModel> obtenerPedidoPorId(@PathVariable("id") long id) {
        return this.pedidosService.obtenerPorId(id);        
    }

    @DeleteMapping(path= "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.pedidosService.eliminarPedido(id);
        if (ok){
            return "Se elimino el pedido con id " + id;
        }
        else {
            return "No pudo eliminar el pedido con id" + id;
        }
    }
}
