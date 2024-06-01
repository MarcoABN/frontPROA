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



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarEmbarcacaoComponent,
    ConsultarEmbarcacaoComponent,
    CadastrarEmbarcacaoComponent,
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
