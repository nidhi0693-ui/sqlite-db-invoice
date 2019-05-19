(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-add-product-add-product-module"],{

/***/ "./src/app/products/add-product/add-product.module.ts":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.module.ts ***!
  \************************************************************/
/*! exports provided: AddProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product.page */ "./src/app/products/add-product/add-product.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");








// For Material


var routes = [
    {
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]
    }
];
var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());



/***/ }),

/***/ "./src/app/products/add-product/add-product.page.html":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"products\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"addProductForm\" (ngSubmit)=\"onAddProduct()\">\n\n      <mat-form-field class=\"full-width\">\n          <input matInput type=\"text\" placeholder=\"Product Name\" formControlName=\"name\" required>\n          <mat-error *ngFor=\"let validation of form_validation_messages.name\">\n            <mat-error class=\"error-message\" *ngIf=\"addProductForm.get('name').hasError(validation.type) && (addProductForm.get('name').dirty || addProductForm.get('name').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n          <input matInput type=\"text\" placeholder=\"Price\" formControlName=\"price\" required>\n          <mat-error *ngFor=\"let validation of form_validation_messages.price\">\n            <mat-error class=\"error-message\" *ngIf=\"addProductForm.get('price').hasError(validation.type) && (addProductForm.get('price').dirty || addProductForm.get('price').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n          <input matInput type=\"text\" placeholder=\"Tax\" formControlName=\"tax\" required>\n          <mat-error *ngFor=\"let validation of form_validation_messages.tax\">\n            <mat-error class=\"error-message\" *ngIf=\"addProductForm.get('tax').hasError(validation.type) && (addProductForm.get('tax').dirty || addProductForm.get('tax').touched)\">{{validation.message}}</mat-error>\n          </mat-error>\n      </mat-form-field>\n\n    <ion-button color=\"secondary\" margin-top expand=\"block\" type=\"submit\" [disabled]=\"addProductForm.invalid\">Add Product Info</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/add-product/add-product.page.scss":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column; }\n\n.full-width {\n  width: 100%; }\n\n.error-msg {\n  color: red;\n  display: block;\n  position: absolute;\n  font-size: 75%;\n  bottom: -2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYWRkLXByb2R1Y3QvQTpcXHNxbGl0ZS1kYi1pbnZvaWNlL3NyY1xcYXBwXFxwcm9kdWN0c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lcnJvci1tc2cge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGJvdHRvbTogLTJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/add-product/add-product.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/add-product/add-product.page.ts ***!
  \**********************************************************/
/*! exports provided: AddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPage", function() { return AddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddProductPage = /** @class */ (function () {
    function AddProductPage(_DB, _FB, _router) {
        this._DB = _DB;
        this._FB = _FB;
        this._router = _router;
        this.form_validation_messages = {
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
            'tax': [
                { type: 'required', message: 'Tax is required' },
                { type: 'pattern', message: 'Only numbers are allowed.' },
                { type: 'minlength', message: 'Tax cannot be empty.' },
                { type: 'maxlength', message: 'Tax cannot be more than 3 characters' }
            ]
        };
    }
    AddProductPage.prototype.ngOnInit = function () {
        this.addProductForm = this._FB.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)
                ])],
            tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(100(?:\.?)?|\d?\d(?:\.\d\d?)?)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)
                ])]
        });
    };
    // Add Product Information
    AddProductPage.prototype.onAddProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.addProductForm.valid) return [3 /*break*/, 2];
                        formData = this.addProductForm.value;
                        formData.id = this.generateRandomID();
                        return [4 /*yield*/, this._DB.createProduct(formData.id, formData.name, parseFloat(formData.price), parseFloat(formData.tax))
                                .then(function () {
                                _this.addProductForm.reset();
                                _this._router.navigate(['/products']);
                                _this._DB.exportAsJSON()
                                    .then(function (data) { return console.log("Exported in JSON: ", data); });
                            }).catch(function (e) { return console.log(e); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // Generate A Unique ID
    AddProductPage.prototype.generateRandomID = function () {
        var data = Math.random();
        var id = data.toString(16).substring(2, 8);
        return id;
    };
    AddProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.page.html */ "./src/app/products/add-product/add-product.page.html"),
            styles: [__webpack_require__(/*! ./add-product.page.scss */ "./src/app/products/add-product/add-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseProviderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddProductPage);
    return AddProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-add-product-add-product-module.js.map