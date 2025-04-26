import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  private cartService = inject(CartService);
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product Extra Description Here',
        price: 300,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 150,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 300,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 150,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
