import { Component } from "@angular/core";
import { Embarcacao } from "../model/embarcacao";
import { Cliente } from "../model/cliente";
import { FrontEmbarcacaoService } from 'src/app/services/front-embarcacao.service';
import { ActivatedRoute, Router } from "@angular/router";
import { AnexosService } from "../services/anexos/anexo2D.service";
import { FrontClienteService } from "../services/front-cliente.service";

@Component({
    selector: 'app-anexos',
    templateUrl: './anexos.component.html',
    styleUrls: ['./anexos.componente.css']
})

export class AnexosComponent {
    idEmbarcacao!: number;
    idCliente!: number;
    embarcacao!: Embarcacao;
    cliente!: Cliente;

    constructor(
        private anexosService: AnexosService,
        private clienteService: FrontClienteService,
        private embarcacaoService: FrontEmbarcacaoService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    consultarAnexo() {
        this.clienteService.consultarCliente(this.idCliente).subscribe(data => {
            this.cliente = data;
        });

        this.embarcacaoService.consultarEmbarcacao(this.idEmbarcacao).subscribe(data => {
            this.embarcacao = data;
        });
    }

    retornar() {
        this.router.navigate(['/inicio']);
    }

    gerarpdf() {
        this.anexosService.anexo2D(this.embarcacao, this.cliente);
    }
}
