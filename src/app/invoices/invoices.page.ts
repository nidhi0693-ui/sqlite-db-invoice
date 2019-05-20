import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DatabaseProviderService } from '../services/database-provider.service';
import { Invoice } from '../DATA_MODELS/invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  private invoices: Array<Invoice> = []
  private _invoiceAmt = null
  localData: Date
  invoice = <Invoice>{}

  composeArray = []
  dataToShowInvoice = []

  // Generate Flag to control the data passed over navigation
  invoicesFlag = "invoices"

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _DB: DatabaseProviderService
  ) {
    

    // Check for Parameters recieved
    this._route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this._invoiceAmt = this._router.getCurrentNavigation().extras.state.data_1
        this.dataToShowInvoice = this._router.getCurrentNavigation().extras.state.data_2
        console.log("Data to Show In Invoice", this.dataToShowInvoice)

        if (this._invoiceAmt) {
          console.log("1. Invoice amount from Create Invoice Page: ", this._invoiceAmt)

          this.invoice.id = this.dataToShowInvoice[0].item_id
          this.invoice.created_at = new Date().toLocaleString()
          this.invoice.billed_amt = this._invoiceAmt
          console.log("2. Invoice property with its updated Data: ", this.invoice)

          // this.invoices.push(this.invoice)
          // console.log("3. So Now the complete Invoices is: ", this.invoices)
          this._DB.createInvoice(this.invoice)
          .then(() => {
            console.log('One invoice row added in invoices table with these data', this.invoice)
            this._DB.readAllInvoice()
              .then((data: any) => {
                console.log("this data will be invoices: ", data)
                this.invoices = data
                console.log("From invoices page total invoices are: ", this.invoices)
              })
          }).catch(e => console.log(e))
        } else {
          console.log("Invoice amount not generated")
        }
      }
    })

    this.composeArray.length = 0
  }

  ngOnInit() { 
    // Load all invoices
    // this._DB.readAllInvoice().catch(e => console.log(e))
  }

  ionViewDidEnter() {
    // Load all invoices
    this._DB.readAllInvoice()
      .then((data: any) => {
        console.log("this data will be invoices: ", data)
        this.invoices = data
        console.log("From invoices page total invoices are: ", this.invoices)
      }).catch(e => console.log(e))
  }


  showInvoice(invObj) {
    console.log("Tapped Value: ", invObj)
    let dataToSend: NavigationExtras = {
      state: {
        data: invObj
      }
    }
    this._router.navigate(['/invoice'], dataToSend)
  }


  createNewInvoice() {
    this.composeArray.push(this.invoicesFlag)
    let dataToSend: NavigationExtras = {
      state: {
        data: this.composeArray
      }
    }
    this._router.navigate(['/items'], dataToSend)
  }


  loadProductList() {
    let dataToSend: NavigationExtras = {
      state: {
        data: this.invoicesFlag
      }
    }
    this._router.navigate(['/products'], dataToSend);
  }


  exportDbInJSON() {
    this._DB.exportAsJSON();
  }


  // Generate A Unique ID
  generateRandomID() {
    let data = Math.random()
    let id = data.toString(16).substring(2, 8)
    return id
  }
}
