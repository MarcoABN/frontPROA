import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListarEmbarcacaoComponent } from './embarcacao/listarembarcacao/listar-embarcacao.component';
import { ConsultarEmbarcacaoComponent } from './embarcacao/consultarembarcacao/consultar-embarcacao.component';
import { CadastrarEmbarcacaoComponent } from './embarcacao/cadastrarembarcacao/cadastrar-embarcacao.component';
import { AlterarEmbarcacaoComponent } from './embarcacao/alterarembarcacao/alterar-embarcacao.component';
import { ConsultarClienteComponent } from './cliente/consultarcliente/consultar-cliente.component';
import { CadastrarClienteComponent } from './cliente/cadastrarcliente/cadastrar-cliente.component';
import { ListarClienteComponent } from './cliente/listarcliente/listar-cliente.component';
import { AlterarClienteComponent } from './cliente/alterarcliente/alterar-cliente.component';
import { AnexosComponent } from './anexos/anexos.component';


const routes: Routes = [

{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'embarcacao/listarembarcacao', component: ListarEmbarcacaoComponent},
{path: 'embarcacao/consultar-embarcacao/:id', component: ConsultarEmbarcacaoComponent},
{path: 'embarcacao/cadastrar-embarcacao', component: CadastrarEmbarcacaoComponent},
{path: 'embarcacao/alterar-embarcacao/:id', component: AlterarEmbarcacaoComponent},

{path: 'cliente/listar-cliente', component: ListarClienteComponent},
{path: 'cliente/cadastrar-cliente', component: CadastrarClienteComponent},
{path: 'cliente/consultar-cliente/:id', component: ConsultarClienteComponent},
{path: 'cliente/alterar-cliente/:id', component: AlterarClienteComponent},

{path: 'anexos/anexos', component: AnexosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
