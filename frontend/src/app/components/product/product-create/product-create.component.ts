import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0
  }
  constructor(private procuctService: ProductService,
                      private router: Router){

  }

  ngOnInit(): void{}

  createProduct(): void{
    this.procuctService.create(this.product).subscribe(() =>{
      this.procuctService.showMessage('Produto criado com sucesso !')
      this.router.navigate(['/products'])
     })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
  
}
