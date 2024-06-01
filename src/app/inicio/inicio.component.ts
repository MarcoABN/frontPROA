import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor (private router: Router){};

  listarembarcacao(){
    this.router.navigate(['/embarcacao/listarembarcacao']);
  }

  cadastrarembarcacao(){
    this.router.navigate(['/embarcacao/cadastrar-embarcacao']);
  }

}
