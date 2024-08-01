import { Component } from '@angular/core';
// importamos interfaz para banda
import { Banda } from 'src/app/models/banda';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Banda[];

  constructor() {
    this.info = [
      {
        id: "",
        nombre: "Patricio Sardelli",
        alt: "Patricio Sardelli",
        instrumento: "Guitarra",
        edad: 38,
        imagen: "https://media.licdn.com/dms/image/C5603AQGYANE6OzMjbA/profile-displayphoto-shrink_800_800/0/1630043823892?e=2147483647&v=beta&t=hojSQcmbsOoBv4OuwMh5flmSptWzvnG6rBptmy-Oq54",
      },
      {
        id: "",
        nombre: "Gaston Sardelli",
        alt: "Gaston Sardelli",
        instrumento: "Bajo",
        edad: 40,
        imagen: "https://i.pinimg.com/736x/7d/4a/df/7d4adf01195162c4d1640ef879c20812.jpg",
      },
      {
        id: "",
        nombre: "Guido Sardelli",
        alt: "Guido Sardelli",
        instrumento: "Bateria",
        edad: 36,
        imagen: "https://i.pinimg.com/236x/95/db/e2/95dbe2ecf19433f3b92e3dda2020a4f9.jpg",
      },
    ]
  }
}
