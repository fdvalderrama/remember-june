import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  products = signal<Product[]>([])
  productService = inject(ProductService)

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProduct().subscribe({
      next: (data) => {
        this.products.set(data)
      }
    })
  }
}
