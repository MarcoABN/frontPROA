import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';
import { Embarcacao } from '../../model/embarcacao';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class AnexosService {

  constructor() { }

  async anexo2D(embarcacao: Embarcacao, cliente: Cliente): Promise<void> {
    try {
      const pdfBytes = await fetch('assets/Anexo2DPreenchivel.pdf').then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Modify doc, fill out the form
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map((f) => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      //form.getTextField('nomeDoCampoNoPDF').setText(Objeto+campo Em String);
      form.getTextField('nomeEmbarcacao').setText(embarcacao.nomeEmbarcacao);
      form.getTextField('inscricao').setText(embarcacao.numInscricao);
      form.getTextField('arqBruta').setText(embarcacao.arqueacaoBruta.toString());
      form.getTextField('tipo').setText(embarcacao.tipoAtividade);
      form.getTextField('atividade').setText(embarcacao.tipoAtividade);
      form.getTextField('arqLiquida').setText(embarcacao.arqueacaoLiquida.toString());
      form.getTextField('comprimento').setText(embarcacao.compTotal.toString());
      form.getTextField('tripulantes').setText(embarcacao.qtdTripulantes.toString());
      form.getTextField('anoConstrucao').setText(embarcacao.dtConstrucao.toString());
      form.getTextField('boca').setText(embarcacao.bocaMoldada.toString());
      form.getTextField('passageiros').setText(embarcacao.lotacao.toString());
      form.getTextField('numeroCasco').setText(embarcacao.numCasco);
      form.getTextField('contorno').setText(embarcacao.contorno.toString());
      form.getTextField('pontal').setText(embarcacao.pontalMoldado.toString());
      form.getTextField('matCasco').setText(embarcacao.matCasco);

      form.getRadioGroup('naturezaIncricao').select('Value_ihca');


      form.getTextField('nomeReq').setText(cliente.nome);
      form.getTextField('enderecoReq').setText(`${cliente.logradouro}, ${cliente.numero} - ${cliente.complemento}`);
      form.getTextField('cidadeReq').setText(cliente.cidade);
      form.getTextField('bairroReq').setText(cliente.bairro);      
      form.getTextField('cepReq').setText(cliente.CEP);
      form.getTextField('identidadeReq').setText(cliente.rg);
      form.getTextField('orgEmissorReq').setText(cliente.orgEmissor);
      form.getTextField('dtEmissaoReq').setText(cliente.dtEmissao.toString());
      form.getTextField('CPFCNPJReq').setText(cliente.cpfcnpj);
      form.getTextField('telReq').setText(cliente.telefone);
      form.getTextField('celReq').setText(cliente.celular);
      form.getTextField('emailReq').setText(cliente.email);



      
      const radioFields = form.getFields().filter((f)=>f.constructor.name === 'PDFRadioGroup');
      const radioNames = radioFields.map((f)=> f.getName());
      console.log(radioNames);


      

      const modifiedPdfBytes = await pdfDoc.save();
        //Chamada para função: Exibir ou baixar o PDF
      this.openPdfInNewTab(modifiedPdfBytes);
      //this.downloadPdf(modifiedPdfBytes, 'output.pdf');

      console.log('PDF Criado!');
    } catch (err) {
      console.error(err);
    }
  }

  private downloadPdf(data: Uint8Array, filename: string): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  private openPdfInNewTab(data: Uint8Array): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  }
}
