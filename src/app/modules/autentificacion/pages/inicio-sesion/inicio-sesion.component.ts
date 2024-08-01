import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent {
  hide = true;
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = [];

  //funcion para el registro
  async registrar() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }

    try {
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      if (!usuarioBD || usuarioBD.empty) {
        alert('El correo electronico no esta registrado.')
        this.limpiarInputs();
        return;
      }

      const usuarioDoc = usuarioBD.docs[0];

      const usuarioData = usuarioDoc.data() as Usuario;

      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if (hashedPassword !== usuarioData.password) {
        alert("Contraseña incorrecta");
        this.usuarios.password = '';
        return;
      }
    } catch { }
  }

  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = '',
    }
  }
}
