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
  errors: string[] = [];
  users: undefined|null|Utilisateur|any;
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
  async CheckUser()
  {
    this.users = await this.user.getUserPL(this.email1,this.password1).toPromise();
    try{
      this.errors = [];
      console.log("before test ",this.users);
    if(this.users[0].password === this.password1 && this.users[0].email === this.email1)
    {
      console.log("my result  ",this.users[0].email);
      this.router.navigate(['/search']);
    }
    }catch(err)
    {
      this.errors = ['Votre login ou votre password est incorrect'];
      throw err;
      this.errors = [];
   }
   return this.users;
  }
}
