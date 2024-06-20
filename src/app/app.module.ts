import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListarEmbarcacaoComponent } from './embarcacao/listarembarcacao/listar-embarcacao.component';
import { ConsultarEmbarcacaoComponent } from './embarcacao/consultarembarcacao/consultar-embarcacao.component';
import { CadastrarEmbarcacaoComponent } from './embarcacao/cadastrarembarcacao/cadastrar-embarcacao.component';
import { AlterarEmbarcacaoComponent } from './embarcacao/alterarembarcacao/alterar-embarcacao.component';
import { ConsultarClienteComponent } from './cliente/consultarcliente/consultar-cliente.component';
import { ListarClienteComponent } from './cliente/listarcliente/listar-cliente.component';
import { CadastrarClienteComponent } from './cliente/cadastrarcliente/cadastrar-cliente.component';
import { AlterarClienteComponent } from './cliente/alterarcliente/alterar-cliente.component';
import { AnexosComponent } from './anexos/anexos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarEmbarcacaoComponent,
    ConsultarEmbarcacaoComponent,
    CadastrarEmbarcacaoComponent,
    AlterarEmbarcacaoComponent,

    ConsultarClienteComponent,
    ListarClienteComponent,
    CadastrarClienteComponent,
    AlterarClienteComponent,

    AnexosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
