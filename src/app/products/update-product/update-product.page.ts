import { Component, OnInit } from '@angular/core';
import { DatabaseProviderService } from 'src/app/services/database-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
      { type: 'pattern', message: 'Only alphabet allowed. Minimum 3 letters.' },
      { type: 'minlength', message: 'Minimum 3 letters.' }
    ],
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Only numbers are allowed.' },
      { type: 'minlength', message: 'Price cannot be empty.' }
    ],
    'tax': [ // TODO: Valid values are 0 <= Tax <= 100
      { type: 'required', message: 'Tax is required (0 to 100 allowed)' },
      // { type: 'pattern', message: 'Only numbers are allowed.' },
      // { type: 'minlength', message: 'Tax cannot be empty.' }
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
        Validators.pattern('^([a-zA-Z]+([a-zA-Z]+)*)(\s([a-zA-Z]+([a-zA-Z]+)*))*$'),
        Validators.minLength(3)
      ])],
      price: [this._recievedData.price, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
        Validators.minLength(1)
      ])],
      tax: [this._recievedData.tax, Validators.compose([
        Validators.required,
        // Validators.pattern('^\d{1,2}((,|.)\d{1,3})?$'),
        this.taxRangeValidator,
        Validators.minLength(1)
      ])]
    })
  }

  // Update Product Information
  async onUpdateProduct() {
    if (this.updateProductForm.valid) {
      console.log("Nav updated with this data: ", this.updateProductForm.value)

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

  // Custom Validators for numbers ranges from 0 to 100 including boundaries
  taxRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100)) {
        return { 'taxRange': true };
    }
    return null;
  } 

}
