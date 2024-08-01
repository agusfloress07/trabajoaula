import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // definimos coleccion para los productos de la web del tipo Producto
  private productoCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {

  //Referenciamos  coleccion productos y sera subida como "producto" a firebase
    this.productoCollection = database.collection('producto')
   }

   // crear productos
   crearProducto(producto:Producto){
    return new Promise(async(resolve,reject)=> {
      try{

        // creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        // asignamos ID creando al atributo idProducto de la interfaz "Producto"
        producto.idProducto=idProducto;

        const resultado = await this.productoCollection.doc(idProducto).set(producto);

        resolve(resultado);
      } catch(error){
        reject(error);
      }
    })
   }
}
