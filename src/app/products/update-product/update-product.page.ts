import { Component, OnInit } from '@angular/core';
import { DatabaseProviderService } from 'src/app/services/database-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {

  private _recievedData = null
  updateProductForm: FormGroup

  form_validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Name contain only alphabets' },
      { type: 'minlength', message: 'Name must be at least 3 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 10 characters' }
    ],
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Price contain only numaric value' },
      { type: 'minlength', message: 'Price must be at least 1 characters long' },
      { type: 'maxlength', message: 'Price cannot be more than 4 characters' }
    ],
    'tax': [
      { type: 'required', message: 'Tax is required' },
      { type: 'pattern', message: 'Tax contain only numaric value' },
      { type: 'minlength', message: 'Tax must be at least 1 characters long' },
      { type: 'maxlength', message: 'Tax cannot be more than 3 characters' }
    ]
  }

  constructor(
    private _DB: DatabaseProviderService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _TC: ToastController,
    private _FB: FormBuilder,
  ) {
    this._route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this._recievedData = this._router.getCurrentNavigation().extras.state.data;
        console.log("2. Nav enters with this data to Update Product Info: ", this._recievedData)
      }
    })
  }

  ngOnInit() {
    this.updateProductForm = this._FB.group({
      name: [this._recievedData.name, Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        Validators.minLength(3),
        Validators.maxLength(10)
      ])],
      price: [this._recievedData.price, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
        Validators.minLength(1),
        Validators.maxLength(4)
      ])],
      tax: [this._recievedData.tax, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
        Validators.minLength(1),
        Validators.maxLength(3)
      ])]
    })
  }

  // Update Product Information
  async onUpdateProduct() {
    if (this.updateProductForm.valid) {
      console.log("Nav enters with this data: ", this.updateProductForm.value)

      var formData = {
        'id': this._recievedData.id,
        'name': this.updateProductForm.value.name,
        'price': parseFloat(this.updateProductForm.value.price),
        'tax': parseFloat(this.updateProductForm.value.tax)
      }

      console.log("Nav exits with this data: ", formData)

      await this._DB.updateProductInfo(formData)
        .then(() => {
          this._router.navigate(['/products'])
          this._DB.exportAsJSON()
            .then((data) => console.log('Exported in JSON', data))
        })
    }

  }

}
