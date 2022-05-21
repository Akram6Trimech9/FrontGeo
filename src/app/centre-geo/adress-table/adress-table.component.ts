import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { windowRestoreIcon } from '@cds/core/icon';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adress-table',
  templateUrl: './adress-table.component.html',
  styleUrls: ['./adress-table.component.css']
})
export class AdressTableComponent implements OnInit {

  constructor( private addressservice:AdressService) { }
 addresses:any[]= []; 
  ngOnInit(): void {
this.addressservice.getallAdress().subscribe(res=>{
  this.addresses=res
})
  }
  delete(id:any){
    this.addressservice.deleteAdress(id).subscribe(()=>{
      window.location.reload();
    })
  }

}
