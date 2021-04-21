import { Component, OnInit } from '@angular/core';
import {NavService} from 'src/app/service/nav.service';
import {Food} from 'src/app/models/food';
import {SessionStorageService} from 'ngx-webstorage';
import { StripeService,ElementsOptions,Elements,Element as StripeElement, } from "ngx-stripe";
import {HttpClient } from '@angular/common/http';
import { PdfService} from 'src/app/service/pdf.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  elements!: Elements|null|undefined ;
  card!: StripeElement;
  total! : number;
  nom = '';
  prenom = '';
  email = '';
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };
  constructor(private nav:NavService,
    private session: SessionStorageService,
    private stripeService: StripeService,
    private dml:PdfService,
    private http: HttpClient) 
  {
    this.food = Array();
    this.total = 0;
  }
  food! : Food[];
  ngOnInit() {
   this.all();
   this.nom = this.session.retrieve("nom");
   this.prenom = this.session.retrieve("prenom");
   this.email = this.session.retrieve("email");
   this.getMontantTotal();
   this.initButtonStripe();
  }
  all()
  {
    this.nav.food.forEach(f => this.food.push(f));
    this.food.forEach(f => console.log(f));
  }
  getMontantTotal()
  {
    this.food.forEach(f => this.total += f.getMontant());
  }
  initButtonStripe(){
    const promise = this.stripeService.elements(this.elementsOptions).toPromise();
    promise.then(elements =>{
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
             base: {
             iconColor: '#666EE8',
             color: '#31325F',
             lineHeight: '40px',
             fontWeight: 300,
             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
             fontSize: '18px',
             '::placeholder': 
              {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }
  buy1(){
    this.dml.downloadPDF(this.food,this.total);
  }
  buy(){
    const promise = this.stripeService.createToken(this.card,{}).toPromise();
    promise.then(obj => {
      if (obj) {
        console.log("Token is --> ",obj.token.id);
        this.http.post("http://localhost:3000/charge",
        {
        token : obj.token.id,
        email: this.email,
        mont: this.total,
        }).subscribe(
        (res)=>{
        console.log("la reponse du serveur est la suivante",res);
        console.log('Paiement effecuté');
        },
        (err)=>{
          console.log('erreur est ',err)
         }) 
       } 
       else {
       console.log("Ereur creé par la token ");
      }
    });
  }
}
