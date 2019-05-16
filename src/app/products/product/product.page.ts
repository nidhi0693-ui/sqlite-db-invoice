import { Component, OnInit } from '@angular/core';
import { DatabaseProviderService } from 'src/app/services/database-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/DATA_MODELS/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  recievedData = null;
  product: Product[] = []
  constructor(
    private _DB: DatabaseProviderService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this._route.queryParams.subscribe(params => {
      if(this._router.getCurrentNavigation().extras.state) {
        this.recievedData = this._router.getCurrentNavigation().extras.state.data;
        console.log("1. Nav enters with this data to Show Product Info: ", this.recievedData)
      }
    })
  }

  ngOnInit() {
    this.showProductInfo(this.recievedData);
  }

  showProductInfo(id: string) {
    this._DB.getProductInfo(id)
      .then((data: any) => {
        this.product = data;
      }).catch(e => console.log(e))
  }
}
