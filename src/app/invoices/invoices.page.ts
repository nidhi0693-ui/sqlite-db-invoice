import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseProviderService } from '../services/database-provider.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  private _invoiceAmt = null
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _DB: DatabaseProviderService
  ) { 
    this._route.queryParams.subscribe(params => {
      if(this._router.getCurrentNavigation().extras.state) {
        this._invoiceAmt = this._router.getCurrentNavigation().extras.state.data
        if(this._invoiceAmt) {
          console.log("Invoice amount from items: ", this._invoiceAmt)
        } else {
          console.log("Invoice amount not generated")
        }
      }
    })
  }

  ngOnInit() {}
  
  createNewInvoice() {
    this._router.navigate(['/items'])
  }

  loadProductList() {
    this._router.navigate(['/products']);
  }

  exportDbInJSON() {
    this._DB.exportAsJSON();
  }
}
