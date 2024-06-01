import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FrontEmbarcacaoService } from 'src/app/services/front-embarcacao.service';
import { Embarcacao } from 'src/app/model/embarcacao';


@Component({
  selector: 'app-alterar-embarcacao',
  templateUrl: './alterar-embarcacao.component.html',
  styleUrls: ['./alterar-embarcacao.component.css']
})



export class AlterarEmbarcacaoComponent {


  idEmbarcacao! :number;
  embarcacao! :Embarcacao;

  constructor(private embarcacaoService :FrontEmbarcacaoService, private router: Router, private route: ActivatedRoute){}

    ngOnInit() :void{
      this.idEmbarcacao = this.route.snapshot.params['id'];
      this.embarcacao = new Embarcacao();
      this.embarcacaoService.consultarEmbarcacao(this.idEmbarcacao).subscribe (data => {
        this.embarcacao = data;
      })
    }

    retornar(){
      this.router.navigate(['/embarcacao/listarembarcacao']);
    }

    onSubmit(){

      //if (!this.embarcacao.nome || !this.embarcacao.dtFab || !this.embarcacao.potencia) {
      //  alert("Por favor, preencha todos os campos.");
      //  return;
      //}
      


      this.embarcacaoService.alterarEmbarcacao(this.idEmbarcacao, this.embarcacao).subscribe (data => {
        console.log(data);
        this.retornar();
      })
    }
    

}

