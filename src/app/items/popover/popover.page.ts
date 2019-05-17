import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PopoverController, NavParams } from '@ionic/angular';
import { DatabaseProviderService } from 'src/app/services/database-provider.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  private _dataFromItems = null
  item_id: string

  constructor(
    private _DB: DatabaseProviderService,
    private _navParams: NavParams,
    private _router: Router, 
    private _PC: PopoverController
  ) { 
    this._dataFromItems = this._navParams.get('dataToSend')
  }

  ngOnInit() {
  }

  // Add more products to generate invoice 
  addMoreProduct() {
    let fromItems = {
        pageName: "Create Invoice",
        content: "Hey! I am from Create Invoice Page"
    }
    let dataToSend: NavigationExtras = {
      state: {
        data: fromItems
      }
    }
    this._PC.dismiss()
    this._router.navigate(['/products'], dataToSend)
  }

  // Show all item available in items table
  dataInItemTable() {
    this._PC.dismiss()
    this.item_id = this.generateRandomID()
    this._dataFromItems.forEach(el => {
      let p_id = el.product_id
      let p_name = el.product_name
      let p_qty = el.product_quantity
      let p_price = el.product_price
      let p_tax = el.product_tax
      this._DB.createItem(this.item_id, p_id, p_name, p_qty, p_price, p_tax)
        .catch(e => console.log(e))
    })

    this._DB.readAllItem()
      .then(() => {
        this._DB.exportAsJSON()
          .then((data) => console.log("Exported in JSON: ", data))
      }).catch(e => console.log(e))
  }

  // Generate A Unique ID
  generateRandomID() {
    let data = Math.random();
    let id = data.toString(16).substring(2, 8)
    return id;
  }
}
