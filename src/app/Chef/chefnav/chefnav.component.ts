import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefnav',
  templateUrl: './chefnav.component.html',
  styleUrls: ['./chefnav.component.css']
})
export class ChefnavComponent implements OnInit {

  constructor(private router:Router,private chesservice:ChefService) { }

  ngOnInit(): void {
  }
  onLogOut(): void {
    this.chesservice.logOut();
    this.router.navigate(['/cheflogin']);
  }
}

// constructor(private adminservice:AdminService,private AuthService:AuthService , private router:Router) {
    
// }

// ngOnInit(): void {
//  this.takeadmin()
// }
// nom!: string; 
// prenom!: string; 

// takeadmin(){
//  const tokenloc = localStorage.getItem('access_token');
//  var token : any = tokenloc;
//  var base64Url = token.split('.')[1];
//  var base64 = base64Url.replace('-', '+').replace('_', '/');
//  var tokenInfo = JSON.parse(window.atob(base64));
//  this.adminservice.getAdmin(tokenInfo.admin_id).subscribe(res=>{
// this.nom=res.nom;
// this.prenom=res.prenom;
// console.log(this.nom)
//  })}
//  onLogOut(): void {
//  this.AuthService.logOut();
//  this.router.navigate(['/adminlogin']);
// }