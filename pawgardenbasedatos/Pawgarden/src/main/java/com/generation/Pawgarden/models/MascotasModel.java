package com.generation.Pawgarden.models;

import javax.persistence.*;

@Entity
@Table(name= "mascotas")
public class MascotasModel {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
    private long idmascotas;
    private long idUsuario;
    private String nombre;
    private int edad;
    private String raza;
    private String sexo;


    public long getIdmascotas() {
        return idmascotas;
    }
    public void setIdmascotas(long idmascotas) {
        this.idmascotas = idmascotas;
    }
    public long getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(long idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public String getRaza() {
        return raza;
    }
    public void setRaza(String raza) {
        this.raza = raza;
    }
    public String getSexo() {
        return sexo;
    }
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }


    
}
