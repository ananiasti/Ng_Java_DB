import { ApiTesteService } from './../../services/api-teste.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  messageContent: string = '';
  response: string | null = null;
  errorMessage: string | null = null;

constructor(private headerService: HeaderService, private apiTesteService: ApiTesteService){
  headerService.headerData = {
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  }

  }

  ngOnInit(): void {
    
  }
  
  sendMessage(): void{
    this.apiTesteService.sendMessage(this.messageContent).subscribe({
      next: (res: string)=>{
              this.response = res;
              this.errorMessage = null;
      },
      error: (err: HttpErrorResponse)=> {
        console.error('Erro ao enviar mensagem!',err);
        this.errorMessage = `Erro ao enviar mensagem! ${err.status} - ${err.message}`;
        this.response = null;
      }
  });  
  }

}
