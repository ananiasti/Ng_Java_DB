import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

import { ApiTesteService } from '../../services/api-teste.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit{

  constructor(private router: Router, private headerService: HeaderService ){ 

    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefont',
      routeUrl:'/products'
    }
  }

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void{
    this.router.navigate(['./product/create'])
  }

  

}
