import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '@cds/core/icon';
import { ClarityIcons } from '@clr/icons';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private adminservice:AdminService,private AuthService:AuthService , private router:Router) {
    
   }

  ngOnInit(): void {
    this.takeadmin()
  }
  nom!: string; 
  prenom!: string; 

  takeadmin(){
    const tokenloc = localStorage.getItem('access_token');
    var token : any = tokenloc;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.adminservice.getAdmin(tokenInfo.admin_id).subscribe(res=>{
   this.nom=res.nom;
   this.prenom=res.prenom;
  console.log(this.nom)
    })}
    onLogOut(): void {
    this.AuthService.logOut();
    this.router.navigate(['/adminlogin']);
  }

    
}
