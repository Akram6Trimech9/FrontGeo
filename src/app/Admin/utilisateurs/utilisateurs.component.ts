import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  object:any[]=[];

  constructor( private userService:UsersService , private Router:Router) { }
  searchb: any ; 
  ngOnInit(): void {
    this.getalluser()
  }
  getalluser() :void{
   this.userService.getAllusers().subscribe(res=>{
    this.object=res.filter(el => el !== null); 
    console.log(this.object)
     })
  }

myFunction(obj:any ){
  
  console.log(obj)
this.userService.Deletuser(obj).subscribe(()=>{
 })
this.Router.navigate(['admin/utilisateurs'])
.then(() => {
  window.location.reload();
});
}
search(){
  if(this.searchb==""){
    this.ngOnInit();
  }else { 
    this.object=this.object.filter(res=>{
      return res.nom.toLocaleLowerCase().match(this.searchb)
    })
  }
  }
}
