import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontClienteService } from 'src/app/services/front-cliente.service';
import { CepService } from 'src/app/services/cep.service'; // Importando o serviço de CEP
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {

  idCliente!: number;
  cliente!: Cliente;

  constructor(
    private clienteService: FrontClienteService, 
    private cepService: CepService, // Injetando o serviço de CEP
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteService.consultarCliente(this.idCliente).subscribe(data => {
      this.cliente = data;
    });
  }

  retornar() {
    this.router.navigate(['/cliente/listar-cliente']);
  }

  onSubmit() {
    this.clienteService.alterarCliente(this.idCliente, this.cliente).subscribe(data => {
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
