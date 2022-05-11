import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';

@Component({
  selector: 'app-facteur-nav',
  templateUrl: './facteur-nav.component.html',
  styleUrls: ['./facteur-nav.component.css']
})
export class FacteurNavComponent implements OnInit {
   constructor(private facteur:FacteurService,private router:Router) { }
   ngOnInit(): void {
  }
  onLogOut(): void {
    this.facteur.logOut();
    this.router.navigate(['/facteurlogin']);
  }

}
