import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.page.html',
  styleUrls: ['./deposite.page.scss'],
})
export class DepositePage implements OnInit {

  amount:number
  returnURL:string=""

  constructor(public navCtrl:NavController,private router: Router) { }

  ngOnInit() {
  }

  Payment(){
    console.log("Deposite:"+ this.amount);
    this.returnURL="/payment"
    this.router.navigate([this.returnURL])
  }
}
