import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {Food} from 'src/app/models/food';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  dattes : any;
  convt : string;
  constructor(private session: SessionStorageService,private router : Router) { }
  heure()
  {
    const date = new Date();
    const heure = date.getHours();
    const minutes = date.getMinutes();
    if(minutes < 10)
     return heure + ":" + "0" +minutes;
    else
     return heure + ":" +minutes;
  }
  table(f: Food[]){
    const data = new Array(f.forEach(element => {new Array(element.getNom())}))
    return data;

  }
  downloadPDF(f: Food[], mont:number){
    this.dattes =  new Date();
    this.convt = this.dattes.toLocaleDateString();
    const arr1 = new Array(f.length);
     var i: number;
     i = 0;
      f.forEach(element => {

        arr1[i] = new Array(element.getNom(),element.getCategorie(),element.getMontant().toString());
       i++;})
    
    const data = arr1;
   // const data = [['2021-24',1, 2, 2,this.convt,this.heure()],]
    const head = [['Name', 'categorie', 'Montant','Date','heure']]
    const doc = new jsPDF();
    var img = new Image();
    img.src = 'assets/images/resource/logo.png';
    doc.addImage(img, 'png', 80, 20, 35, 35);
    doc.setFont("times");
    doc.getStyle("normal");
    doc.setFontSize(15); 
    doc.text("Food Express",10,30);
    doc.text("express@food.net",10,40);
    doc.text("adresse",10,50);
    doc.text("P:(+33)491371065",10,60);
    doc.setFontSize(15)
    doc.text(this.session.retrieve("nom")+"  "+this.session.retrieve("prenom"),130,50);
    doc.text(this.session.retrieve("email"),130,60);
    doc.setFontSize(11);
    //doc.text(this.session.retrieve("adresse"),130,70);
    //doc.text(this.session.retrieve("telephone"),130,80);
    autoTable(doc, {
      startY: 110,
      head: head,
      body: data,
      didDrawCell: (data) => {
        console.log(data.column.index)
      },
    })
    doc.save('facture.pdf')
  }

}
