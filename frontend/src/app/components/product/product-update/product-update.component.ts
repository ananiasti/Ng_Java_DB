import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  product: Partial<Product> = { };

  constructor(private productService: ProductService, 
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void{ 
    const id = this.route.snapshot.paramMap.get('id')
    if (id){
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
    }
  }

  updateProduct(): void{
    if (this.product.id){
       this.productService.update(this.product as Product).subscribe(() => {
          this.productService.showMessage('Produto alterado com sucesso!');
          this.router.navigate(['/products']);
    });
  }else {
      this.productService.showMessage('Produto não encontrado!');
    }
  } 
  
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
