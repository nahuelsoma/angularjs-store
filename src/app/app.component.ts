import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person = {
    name: 'Juan',
    age: 37,
  };

  names: string[] = ['Juan', 'Roberto', 'Ana'];

  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: 'https://picsum.photos/id/15/250',
      category: 'category 2',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/id/25/250',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/id/35/250',
      category: 'category 1',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/id/45/250',
      category: 'all',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://picsum.photos/id/55/250',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://picsum.photos/id/65/250',
      category: 'all',
    },
  ];

  widthImg: number = 100;

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.register);
  }
}
