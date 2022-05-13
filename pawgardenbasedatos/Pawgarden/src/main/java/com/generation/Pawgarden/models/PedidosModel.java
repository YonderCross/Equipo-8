package com.generation.Pawgarden.models;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name= "pedidos")
public class PedidosModel {
    
    @Id
	@Column(unique = true, nullable = false)
    private Long idPedido;
    private Long idProducto;
    private Long idUsuario;
    private int estatus;
    private int cantidad;
    private Date fecha;
    private String direccionEnvio;

    
    public Long getIdPedido() {
        return idPedido;
    }
    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }
    public Long getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }
    public Long getIdProducto() {
        return idProducto;
    }
    
    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public int getEstatus() {
        return estatus;
    }
    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }
    public int getCantidad() {
        return cantidad;
    }
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    public Date getFecha() {
        return fecha;
    }
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public String getDireccionEnvio() {
        return direccionEnvio;
    }
    public void setDireccionEnvio(String direccionEnvio) {
        this.direccionEnvio = direccionEnvio;
    }

    
}
