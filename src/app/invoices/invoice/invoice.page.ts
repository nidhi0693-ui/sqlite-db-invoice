import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseProviderService } from 'src/app/services/database-provider.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  dataRecieved = null
  invId: string
  dataToShow = null

  constructor(
    private _DB: DatabaseProviderService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this._route.queryParams.subscribe(params => {
      if(this._router.getCurrentNavigation().extras.state) {
        this.dataRecieved = this._router.getCurrentNavigation().extras.state.data
        console.log("Invoice is Recieved with these data: ", this.dataRecieved)

        this.invId = this.dataRecieved.id
        console.log("For this Id "+this.invId+" generate invoice")

        this._DB.getItemInfo(this.invId)
        .then((data) => {
          console.log("Data for item_id: ", data)
          this.dataToShow = data
        })
        .catch(e => console.log(e))
      }
    })

  }

  ngOnInit() {
  }

}
