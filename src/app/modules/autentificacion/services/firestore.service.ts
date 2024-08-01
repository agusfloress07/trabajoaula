import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    /*
    usuariosCollection va a definir la nueva coleccion 'usuarios' que esta en nuestra base de datos
    */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario:Usuario, id:string){
    //generamos nueva promesa y utiliza los metodos:
    //RESOLVE: promesa resulta -> funciona correctamente
    //REJECT: promesa rechaza -> ocurrio una falla
    return new Promise(async (resolve, reject) =>{
      try{
        usuario.uid = id;
        /*
        *const resultado = coleccion de usuario, envia como documento el UID
        *y setea la informacion que ingresamos en el registro
        */
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
        //bloque CATCH encapsula una falla y la vuelve un error
      } catch(error){
        reject(error);
      }
    })
  }
}
