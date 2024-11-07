import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{

  product: Partial<Product> = {};

  constructor(private productService: ProductService,
              private router : Router,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
     this.productService.readById(id).subscribe(product =>{
       this.product = product;
    })
  }
  }

  deleteProduct(){
    if(this.product.id){
    this.productService.delete(this.product.id).subscribe(() =>{
      this.productService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(["/products"]);
    });
  }}
  

  cancel(){
    this.router.navigate(['/products'])
  }

}
