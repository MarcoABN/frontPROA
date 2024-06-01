import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Embarcacao } from 'src/app/model/embarcacao';
import { FrontEmbarcacaoService } from 'src/app/services/front-embarcacao.service';

@Component({
  selector: 'app-cadastrar-embarcacao',
  templateUrl: './cadastrar-embarcacao.component.html',
  styleUrls: ['./cadastrar-embarcacao.component.css']
})
export class CadastrarEmbarcacaoComponent {

    idEmbarcacao!: number;
    embarcacao: Embarcacao = new Embarcacao();

    constructor(private embarcacaoService: FrontEmbarcacaoService, private router: Router){}

      ngOnInit(): void{}

      retornar(){
        this.router.navigate(['inicio']);
      }

      onSubmit(){

        if (!this.embarcacao.nomeEmbarcacao || !this.embarcacao.dtConstrucao) {
          alert("Por favor, preencha todos os campos.");
          return;
        }

        this.embarcacao.id = 0;

        this.embarcacaoService.cadastrarEmbarcacao(this.embarcacao).subscribe (data => {
          console.log(data);
          this.retornar();
        });
      }

}
