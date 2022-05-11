import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clientservices/client.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private clienservice:ClientService) { }

  ngOnInit(): void {
  }
 

}
