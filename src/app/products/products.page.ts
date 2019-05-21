import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseProviderService } from '../services/database-provider.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Product } from '../DATA_MODELS/product';
import { ToastController, IonItemSliding } from '@ionic/angular';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  @ViewChild('slidingItem') slideItem: IonItemSliding;
  private _products = []
  private _selectedProduct = []
  private dataRecieved = null
  productsFlag = "products"
  order: string = 'name'
  
  constructor(
    private _DB: DatabaseProviderService,
    private _route: ActivatedRoute,
    private _router: Router, 
    private _TC: ToastController
    // private orderPipe: OrderPipe
  ) { 
    this._route.queryParams.subscribe(params => {
      if(this._router.getCurrentNavigation().extras.state) {
        this.dataRecieved = this._router.getCurrentNavigation().extras.state.data
        console.log(`Data recived from ${this.dataRecieved.pageName} Page and content is ${this.dataRecieved.content}`)
      }
    })
  }

  ngOnInit() { }

  // In order to load updated data every time when page gets loaded
  ionViewWillEnter() {
    this.loadProducts();
    this._products.map((data) => {
      data.hasSelected = false
    })
  }

  // Load the Products from Database
  loadProducts() {
    this._DB.readAllProduct()
      .then((data: any) => {
        this._products = data;
        // this._products = this.orderPipe.transform(this._products, 'name')
        console.log("form products page loadProducts(): ", this._products)
      }).catch(e => console.log(e))
  }


  // Select Product'/s and send to items Page in order to generate Invoice
  selectProduct(ev: any, data) {
    if(ev.target.checked === true) {
      data.hasSelected = true
    } else {
      data.hasSelected = false
    }
    this._selectedProduct = this._products.filter((res) => {
      if(res.hasSelected === true) {
        return res;
      } else {
        return;
      }
    })
    console.log("selected Data To Send: ", this._selectedProduct)
  }

  markedData() {
    let dataToSend: NavigationExtras = {
      state: {
        data: this._selectedProduct
      }
    }
    console.log("On products page dataSendToItemsPage", this._selectedProduct)
    this._router.navigate(['/items'], dataToSend)
  }



  //<-------Start CRUD operation on DB ------------------>
  // Add New Product into DB
  addProduct() {
    this._router.navigate(['/add-product']);
  }

  // Get the Single Product Information from DB
  showProductInfo(product_id: string) {
    this.slideItem.close();
    let dataToSend: NavigationExtras = {
      state: {
        data: product_id
      }
    }
    console.log("1. Data send from Products to Show Product Info: ", dataToSend)
    this._router.navigate([`/products/${dataToSend.state.data}`], dataToSend)
  }

  // Update the Product Information into DB
  updateProductInfo(prod: Product) {
    this.slideItem.close();
    let dataToSend: NavigationExtras = {
      state: {
        data: prod
      }
    }
    console.log("2. Data send from Products to Update Product Info: ", dataToSend)
    this._router.navigate([`/update-product/${dataToSend.state.data.product_id}`], dataToSend)
  }

  // Delete Product from DB
  async deleteProduct(product_id: string) {
    await this.slideItem.close();
    await this.toastForDelete(product_id);
  }

  // Perform Delete Operation Asynchronouslly
  async toastForDelete(id) {
    const toast = await this._TC.create({
      header: 'Delete Product',
      message: 'Are you sure to delete product ?',
      position: 'middle',
      buttons: [
        {
          text: 'Not Now',
          handler: () => {
            this.cancleToast();
          }
        }, {
          text: 'Yes',
          handler: () => {
            this._DB.deleteProduct(id);
            this.loadProducts();
            this.deleteToast();
          }
        }
      ]
    })
    toast.present();
  };

  async cancleToast() {
    const cancle = await this._TC.create({
      message: 'Product Not Deleted',
      duration: 2000
    });
    cancle.present();
  }

  async deleteToast() {
    const deleteIt = await this._TC.create({
      message: 'Product Deleted Successfully',
      duration: 2000
    });
    deleteIt.present();
  }
  //<-------END of CRUD operation on DB ------------------>

}
