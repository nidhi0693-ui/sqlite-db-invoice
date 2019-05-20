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
  sendToInvoices = []
  composeData = {}
  totalNoOfItems: number
  billedAmt: number
  quantity: number
  enteredQuantities = []
  subTotal = []

  itemsFlag = "items"
  itemId: string
  hideOrShow: Boolean

  constructor(
    private _DB: DatabaseProviderService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _PC: PopoverController
  ) {
    this._route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this._dataRecived = this._router.getCurrentNavigation().extras.state.data
        console.log("This data recieved from products page: ", this._dataRecived)

        this.hideOrShow = this._dataRecived.includes('invoices');
        console.log("Hide Or Show Value: ", this.hideOrShow)
      }
    })

    this.billedAmt = 0

    this.sendToInvoices.length = 0;
    console.log("After Sending Data to Invoices, Values in SendToInvoices: ", this.sendToInvoices)

    this.itemId = this.generateRandomID()
    console.log("Id Generated for new Items: ", this.itemId)
  }

  ngOnInit() { }

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
    this.totalNoOfItems = this._dataRecived.length
    console.log("Total no. of Items Recieved: ", this.totalNoOfItems)

    for (let i = 0; i < this.totalNoOfItems; i++) {
      if (ind === i) {
        console.log("Index At: ", ind)
        this.enteredQuantities[ind] = parseInt(ev.target.value)
        this.quantity = this.enteredQuantities[ind]

        if (isNaN(this.enteredQuantities[ind])) {
          this.enteredQuantities[ind] = 0
        }

      // To store items into Database
      let composeData = {
        'item_id': this.itemId,
        'product_id': itemObj.id,
        'product_name': itemObj.name,
        'product_quantity': this.enteredQuantities[ind], 
        'product_price': itemObj.price,
        'product_tax': itemObj.tax
      }

      this.sendToInvoices.push(composeData)
      
      this._DB.createItem(this.itemId, itemObj.id, itemObj.name, this.enteredQuantities[ind], itemObj.price, itemObj.tax)
        .then(() => console.log("New item row has added Items Table"))
        .catch(e => console.log(e))
      }

      console.log("Quantity entered for this object: ", itemObj)
      console.log(`1. Quantity entered ${this.enteredQuantities[ind]} and type of quantity = ${typeof(this.enteredQuantities[ind])}`)
      console.log(`2. Product price is ${itemObj.price} and type of quantity = ${typeof(itemObj.price)}`)
      console.log(`3. Product tax is ${itemObj.tax} and type of quantity = ${typeof(itemObj.tax)}`)

      itemObj.total = this.enteredQuantities[ind] * (itemObj.price + ((itemObj.tax / 100) * itemObj.price))
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
        data_1: this.billedAmt,
        data_2: this.sendToInvoices
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
