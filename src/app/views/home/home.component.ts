import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService} from 'src/app/service/utilisateur.service';
import {Router} from '@angular/router';
import { MapsService } from 'src/app/service/maps.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  password ='';
  nom = '';
  prenom ='';
  email = '';
  email1 = '';
  password1 = '';
  error1 = [''];
  error = [];
  u : Utilisateur[] | undefined;
  submitted: any;
  AdresseClientI : any;
  AdresseClientB : any;

  constructor(
    private router : Router,
    private user :UtilisateurService,
    private map : MapsService) 
    {
    }

  ngOnInit() {
    this
  }
  AddUser()
  {
    const users = new Utilisateur(this.nom,this.prenom,this.email,this.password);
    this.user.addUtilisateurs(users)
    .pipe()
    .subscribe(
      data => {
        console.log("resultat requete "+data);
      }
    );
  }
  CheckUser()
  {
    
  this.user.getUserPL(this.email1,this.password1)
  .pipe(first()).subscribe(
    user => {
      if(user.password === "")
      {
        this.error1 = ['your login or your password it is not correct'];
      }else
      { 
        let result : any;
        result = JSON.stringify(user);
        //resut as Utilisateur;
        console.log("my result  "+result);
        this.router.navigate(['/search']);
      }
    },
    error =>
    { 
      this.error1 = ['your login or your password it is not correct'];
    } 
    );
  }
}
