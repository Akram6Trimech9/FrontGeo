import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientservices/client.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private clienservice:ClientService,private router:Router  ) { }

  ngOnInit(): void {
  }
  onLogOut(): void {
    this.clienservice.logOut();
    this.router.navigate(['/client']);
  }

}
