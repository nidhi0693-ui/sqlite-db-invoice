import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DatabaseProviderService } from '../../services/database-provider.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProductForm: FormGroup;

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
      // { type: 'taxRangeValidator', message: 'Only numbers are allowed.' },
      // { type: 'minlength', message: 'Tax cannot be empty.' }
    ]
  }

  constructor(
    private _DB: DatabaseProviderService,
    private _FB: FormBuilder, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.addProductForm = this._FB.group({
      name: ['', Validators.compose([
        // Validators.pattern("^[a-zA-z]+([\s][a-zA-Z]+)*$"),
        // Validators.pattern("^([a-zA-Z])+(\s)+[a-zA-Z]+$"),
        // Validators.pattern("[a-zA-Z]+([\s][a-zA-Z]+)*"),
        Validators.required,
        Validators.pattern("^([a-zA-Z]+([a-zA-Z]+)*)(\s([a-zA-Z]+([a-zA-Z]+)*))*$"),
        Validators.minLength(3)
      ])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
        Validators.minLength(1)
      ])],
      tax: ['', Validators.compose([
        // Validators.pattern('^\d{1,2}((,|.)\d{1,3})?$'), 
        Validators.required,
        this.taxRangeValidator,  
        Validators.minLength(1)
      ])]
    })
  }

  // Add Product Information
  async onAddProduct() {
    if(this.addProductForm.valid) {
      let formData = this.addProductForm.value;
      formData.id = this.generateRandomID()
      await this._DB.createProduct(formData.id, formData.name, parseFloat(formData.price), parseFloat(formData.tax))
        .then(() => {
          this.addProductForm.reset();          
          this._router.navigate(['/products'])
          this._DB.exportAsJSON()
            .then((data) => console.log("Exported in JSON: ", data))
        }).catch(e => console.log(e))
    }
  } 

  // Generate A Unique ID
  generateRandomID() {
    let data = Math.random();
    let id = data.toString(16).substring(2, 8)
    return id;
  }

  // Custom Validators for numbers ranges from 0 to 100 including boundaries
  taxRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100)) {
        return { 'taxRange': true };
    }
    return null;
  } 

}
