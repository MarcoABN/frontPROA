import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontEmbarcacaoService } from 'src/app/services/front-embarcacao.service';
import { CepService } from 'src/app/services/cep.service'; // Importando o serviço de CEP
import { Embarcacao } from 'src/app/model/embarcacao';

@Component({
  selector: 'app-alterar-embarcacao',
  templateUrl: './alterar-embarcacao.component.html',
  styleUrls: ['./alterar-embarcacao.component.css']
})
export class AlterarEmbarcacaoComponent implements OnInit {

  idEmbarcacao!: number;
  embarcacao!: Embarcacao;

  constructor(
    private embarcacaoService: FrontEmbarcacaoService, 
    private cepService: CepService, // Injetando o serviço de CEP
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idEmbarcacao = this.route.snapshot.params['id'];
    this.embarcacao = new Embarcacao();
    this.embarcacaoService.consultarEmbarcacao(this.idEmbarcacao).subscribe(data => {
      this.embarcacao = data;
    });
  }

  retornar() {
    this.router.navigate(['/embarcacao/listarembarcacao']);
  }

  onSubmit() {
    this.embarcacaoService.alterarEmbarcacao(this.idEmbarcacao, this.embarcacao).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }

  buscarEndereco() {
    if (this.embarcacao.CEP) {
      this.cepService.buscarCep(this.embarcacao.CEP).subscribe(
        dados => {
          if (dados) {
            this.embarcacao.logradouro = dados.logradouro;
            this.embarcacao.bairro = dados.bairro;
            this.embarcacao.UF = dados.uf;
            this.embarcacao.cidade = dados.localidade;
          }
        },
        error => {
          console.error('Erro ao buscar o endereço:', error);
        }
      );
    }
  }
}
