import { Injectable } from '@angular/core';
import { PDFDocument } from 'pdf-lib';

@Injectable({
  providedIn: 'root'
})
export class AnexosService {

  constructor() { }

  async anexo2D(nomeEmbarcacao: string): Promise<void> {
    try {
      const pdfBytes = await fetch('assets/normam211Preenchivel.pdf').then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Modify doc, fill out the form
      const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map((f) => f.getName());
      console.log({ fieldNames });

      const form = pdfDoc.getForm();

      form.getTextField('nomeEmbarcacao').setText(nomeEmbarcacao);
      console.log(nomeEmbarcacao);

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
