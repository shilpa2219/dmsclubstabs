import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  returnURL:string=""
  constructor(public navCtrl:NavController,private router: Router) {}

  nextpage(){
    this.returnURL="/wallet"
    this.router.navigate([this.returnURL])
  }
  recharge(){
    this.returnURL="/deposite"
    this.router.navigate([this.returnURL])
  }


}
