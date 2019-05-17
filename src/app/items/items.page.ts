import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DatabaseProviderService } from '../services/database-provider.service';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from './popover/popover.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  private _dataRecived = null
  totalNoOfItems: number
  billedAmt: number
  quantity: number
  enteredQuantities = []
  subTotal = []

  constructor(
    private _DB: DatabaseProviderService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _PC: PopoverController
  ) {
    this._route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this._dataRecived = this._router.getCurrentNavigation().extras.state.data
        console.log(`On Invoice Creation Page, data recieved ${this._dataRecived}`)
      }
    })
    this.billedAmt = 0
  }

  ngOnInit() {
    if(this._dataRecived.length === undefined) {
      this.totalNoOfItems = 0  
      console.log(`Total No. of Items = ${this.totalNoOfItems}`)
    } else {
      this.totalNoOfItems = this._dataRecived.length
      console.log(`Total No. of Items = ${this.totalNoOfItems}`)    }
  }

  // Create PopOver to get more options for user
  async moreOptions(ev: any) {
    const popOver = await this._PC.create({
      component: PopoverPage,
      componentProps: { dataToSend: this._dataRecived },
      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    })
    popOver.present();
  }

  // Get Quantity of Product from User
  getQuantity(ev: any, itemObj, ind) {
    for (let i = 0; i < this.totalNoOfItems; i++) {
      if (ind === i) {
        this.enteredQuantities[ind] = parseInt(ev.target.value)
        this.quantity = this.enteredQuantities[ind]
        if (isNaN(this.enteredQuantities[ind])) {
          this.enteredQuantities[ind] = 0
        }
      }
      console.log(`1. Quantity entered ${this.enteredQuantities[ind]} and type of quantity = ${typeof(this.enteredQuantities[ind])}`)
      console.log(`2. Product price is ${itemObj.product_price} and type of quantity = ${typeof(itemObj.product_price)}`)
      console.log(`3. Product tax is ${itemObj.product_tax} and type of quantity = ${typeof(itemObj.product_tax)}`)

      itemObj.total = this.enteredQuantities[ind] * (itemObj.product_price + ((itemObj.product_tax / 100) * itemObj.product_price))
      this.subTotal[ind] = itemObj.total
    }

    this.billedAmt = this.subTotal.reduce((a, b) => a + b)
  }

  // Remove invoice from item list shown over screen not from item table
  removeFromList() {
    console.log("Remove From List Button Clicked")
  }

  // Generate New Invoice with updated billedAmt
  generateNewInvoice() {
    let dataToSendToInvoices: NavigationExtras = {
      state: {
        data: this.billedAmt
      }
    }
    this._router.navigate(['/invoices'], dataToSendToInvoices)
  }

  // Generate A Unique ID
  generateRandomID() {
    let data = Math.random()
    let id = data.toString(16).substring(2, 8)
    return id
  }
}
