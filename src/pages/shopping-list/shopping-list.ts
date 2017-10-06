import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddShoppingPage} from "../add-shopping/add-shopping";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateAddShoppingPage(){
  	// navigate  the user to add shopping page
  	this.navCtrl.push(AddShoppingPage);
  }

}
