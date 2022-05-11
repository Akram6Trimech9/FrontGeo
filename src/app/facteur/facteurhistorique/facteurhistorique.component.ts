import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';
import { FacteurService } from 'src/app/services/facteur.service';
import { TourneeService } from 'src/app/services/tournee.service';

@Component({
  selector: 'app-facteurhistorique',
  templateUrl: './facteurhistorique.component.html',
  styleUrls: ['./facteurhistorique.component.css']
})
export class FacteurhistoriqueComponent implements OnInit {
  id:any

  constructor(private router:Router,private route: ActivatedRoute,private facteurService:FacteurService) { }
  private routeSub!: Subscription;

  ngOnInit(): void {
this.takeuse()
        
  }
  tournee:any;
  takeuse(){
    const tokenloc = localStorage.getItem('jwt');
    console.log(tokenloc,"wiw")
    var token : any = tokenloc;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.facteurService.getFacteurByid(tokenInfo.facteur_id).subscribe(res=>{
      this.facteurService.getfacteurbyid(res._id).subscribe(res=>{
        this.tournee=res.tournee;
        console.log(res.tournee,"ok")
          })
    this.id=res._id  
    })
    }
   edit(id:any){
    this.router.navigate([`facteurdash/${this.id}/addactivity`,id]);

   }

  

 
}
