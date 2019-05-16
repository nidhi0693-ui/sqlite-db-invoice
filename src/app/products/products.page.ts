import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseProviderService } from '../services/database-provider.service';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from '../DATA_MODELS/product';
import { ToastController, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  @ViewChild('slidingItem') slideItem: IonItemSliding;
  private _products = [];
  private _selectedProduct = [];
  
  constructor(
    private _DB: DatabaseProviderService,
    private _router: Router, 
    private _TC: ToastController
  ) { }

  ngOnInit() {
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
  }

  markedData() {
    let dataToSend: NavigationExtras = {
      state: {
        data: this._selectedProduct
      }
    }
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
  //<-------END of CRUD operation on DB ------------------>


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
}