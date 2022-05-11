import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefprofil',
  templateUrl: './chefprofil.component.html',
  styleUrls: ['./chefprofil.component.css']
})
export class ChefprofilComponent implements OnInit {

  constructor(private chefService:ChefService) { }

  ngOnInit(): void {
    this.takeChef()
  }
  nom='' ;
  prenom='' ; 
  takeChef(){
    const tokenloc = localStorage.getItem('access_token');
    var token : any = tokenloc;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.chefService.getchef(tokenInfo.chef).subscribe(res=>{
   this.nom=res.nom;
   this.prenom=res.prenom;
  console.log(this.nom)
    })}
   
}
