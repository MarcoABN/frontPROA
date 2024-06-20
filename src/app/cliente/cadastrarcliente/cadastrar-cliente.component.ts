import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { FrontClienteService } from 'src/app/services/front-cliente.service';
import { CepService } from 'src/app/services/cep.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  idCliente!: number;
  cliente: Cliente = new Cliente();

  constructor(
    private ClienteService: FrontClienteService,
    private router: Router,
    private cepService: CepService
  ){}

  ngOnInit(): void {}

  retornar(){
    this.router.navigate(['inicio']);
  }

  onSubmit(){
    if (!this.cliente.nome) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    this.cliente.id = 0;

    this.ClienteService.cadastrarCliente(this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }

  buscarEndereco() {
    if (this.cliente.CEP) {
      this.cepService.buscarCep(this.cliente.CEP).subscribe(
        dados => {
          if (dados) {
            this.cliente.logradouro = dados.logradouro;
            this.cliente.bairro = dados.bairro;
            this.cliente.UF = dados.uf;
            this.cliente.cidade = dados.localidade;
          }
        },
        error => {
          console.error('Erro ao buscar o endereço:', error);
        }
      );
    }
  }
}
