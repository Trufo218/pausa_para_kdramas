package com.pausaparakdramas.PausaParaKdramas.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "firebase_uid", nullable = false, unique = true)
    private String firebaseUid; // 🔑 UID de Firebase Auth

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "foto_perfil")
    private String fotoPerfil;

    @Column(length = 50)
    private String rol;

    @Column(name = "fecha_registro", nullable = false)
    private LocalDate fechaRegistro;

    // Método que se ejecuta antes de persistir para asignar la fecha automáticamente
    @PrePersist
    public void prePersist() {
        this.fechaRegistro = LocalDate.now();
    }
}
