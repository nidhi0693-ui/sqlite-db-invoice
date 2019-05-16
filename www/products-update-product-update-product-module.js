(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-update-product-update-product-module"],{

/***/ "./src/app/products/update-product/update-product.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/products/update-product/update-product.module.ts ***!
  \******************************************************************/
/*! exports provided: UpdateProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductPageModule", function() { return UpdateProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-product.page */ "./src/app/products/update-product/update-product.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");







// For Material


var routes = [
    {
        path: '',
        component: _update_product_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProductPage"]
    }
];
var UpdateProductPageModule = /** @class */ (function () {
    function UpdateProductPageModule() {
    }
    UpdateProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]
            ],
            declarations: [_update_product_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProductPage"]]
        })
    ], UpdateProductPageModule);
    return UpdateProductPageModule;
}());



/***/ }),

/***/ "./src/app/products/update-product/update-product.page.html":
/*!******************************************************************!*\
  !*** ./src/app/products/update-product/update-product.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"products\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"updateProductForm\" (ngSubmit)=\"onUpdateProduct()\">\n    \n    <mat-form-field class=\"full-width\">\n        <input matInput type=\"text\" placeholder=\"Product Name\" formControlName=\"name\" required>\n        <mat-error *ngFor=\"let validation of form_validation_messages.name\">\n          <mat-error class=\"error-message\" *ngIf=\"updateProductForm.get('name').hasError(validation.type) && (updateProductForm.get('name').dirty || updateProductForm.get('name').touched)\">{{validation.message}}</mat-error>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <input matInput type=\"text\" placeholder=\"Price\" formControlName=\"price\" required>\n        <mat-error *ngFor=\"let validation of form_validation_messages.price\">\n          <mat-error class=\"error-message\" *ngIf=\"updateProductForm.get('price').hasError(validation.type) && (updateProductForm.get('price').dirty || updateProductForm.get('price').touched)\">{{validation.message}}</mat-error>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <input matInput type=\"text\" placeholder=\"Tax\" formControlName=\"tax\" required>\n        <mat-error *ngFor=\"let validation of form_validation_messages.tax\">\n          <mat-error class=\"error-message\" *ngIf=\"updateProductForm.get('tax').hasError(validation.type) && (updateProductForm.get('tax').dirty || updateProductForm.get('tax').touched)\">{{validation.message}}</mat-error>\n        </mat-error>\n    </mat-form-field>\n    \n    <ion-button color=\"secondary\" margin-top expand=\"block\" type=\"submit\" [disabled]=\"updateProductForm.invalid\">Update Product Info</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/update-product/update-product.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/products/update-product/update-product.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column; }\n\n.full-width {\n  width: 100%; }\n\n.error-msg {\n  color: red;\n  display: block;\n  position: absolute;\n  font-size: 75%;\n  bottom: -2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaGlyZW5kcmEvRGVza3RvcC9ERVYvdW52aXJlZC9zcWxpdGUtZGItaW9uaWMvc3JjL2FwcC9wcm9kdWN0cy91cGRhdGUtcHJvZHVjdC91cGRhdGUtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBib3R0b206IC0yZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/products/update-product/update-product.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/products/update-product/update-product.page.ts ***!
  \****************************************************************/
/*! exports provided: UpdateProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductPage", function() { return UpdateProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UpdateProductPage = /** @class */ (function () {
    function UpdateProductPage(_DB, _router, _route, _TC, _FB) {
        var _this = this;
        this._DB = _DB;
        this._router = _router;
        this._route = _route;
        this._TC = _TC;
        this._FB = _FB;
        this._recievedData = null;
        this.form_validation_messages = {
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
        };
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this._recievedData = _this._router.getCurrentNavigation().extras.state.data;
                console.log("2. Nav enters with this data to Update Product Info: ", _this._recievedData);
            }
        });
    }
    UpdateProductPage.prototype.ngOnInit = function () {
        this.updateProductForm = this._FB.group({
            name: [this._recievedData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)
                ])],
            price: [this._recievedData.price, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(4)
                ])],
            tax: [this._recievedData.tax, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(3)
                ])]
        });
    };
    // Update Product Information
    UpdateProductPage.prototype.onUpdateProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.updateProductForm.valid) return [3 /*break*/, 2];
                        console.log("Nav enters with this data: ", this.updateProductForm.value);
                        formData = {
                            'id': this._recievedData.id,
                            'name': this.updateProductForm.value.name,
                            'price': parseFloat(this.updateProductForm.value.price),
                            'tax': parseFloat(this.updateProductForm.value.tax)
                        };
                        console.log("Nav exits with this data: ", formData);
                        return [4 /*yield*/, this._DB.updateProductInfo(formData)
                                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._DB.readAllProduct()
                                                .then(function () {
                                                _this._DB.exportAsJSON()
                                                    .then(function (data) { return console.log('Exported in JSON', data); });
                                            })];
                                        case 1:
                                            _a.sent();
                                            this._router.navigate(['/products']);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UpdateProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-product',
            template: __webpack_require__(/*! ./update-product.page.html */ "./src/app/products/update-product/update-product.page.html"),
            styles: [__webpack_require__(/*! ./update-product.page.scss */ "./src/app/products/update-product/update-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UpdateProductPage);
    return UpdateProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-update-product-update-product-module.js.map