import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeeAddressForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    address: new FormGroup({
        postalCode: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required)
    })
});
submitted = false;
onSubmit() {
    
}
addNewEmployeeAddress() {
    this.employeeAddressForm.reset();
    this.submitted = false;
}

}
