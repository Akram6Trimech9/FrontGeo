import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';

@Component({
  selector: 'app-facteur',
  templateUrl: './facteur.component.html',
  styleUrls: ['./facteur.component.css']
})
export class FacteurComponent implements OnInit {
    constructor(private FacteurService:FacteurService,private router:Router) { }
  
    ngOnInit(): void {
      this.getallcentres()
    }
     val=false  ; 
    //  edit(){
    //   const  EditDialog=this.dialogueRef.open(EditcentreComponent);
    //   EditDialog.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
        
    //   });
    // }
    // openDialog() {
    //   const dialogRef = this.dialogueRef.open(AddcentreComponent);
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
    //   });
    // }
    searchb: any ; 
    Facteur:any[]=[];
       getallcentres():void{
        this.FacteurService.getallfacteur().subscribe(res=>{
           this.Facteur=res 
           console.log(this.Facteur)
        })
       }
    search(){
      if(this.searchb==""){
        this.ngOnInit();
      }else { 
        this.Facteur=this.Facteur.filter(res=>{
          return res.nom.toLocaleLowerCase().match(this.searchb)
        })
      }
      }
      deletecentre(id:string){
       this.FacteurService.deleteFacteur(id).subscribe(()=>{   
     })
      this.router.navigate(['admin/facteur'])
   .then(() => {
      window.location.reload();})
    }
  
  }
  
 
