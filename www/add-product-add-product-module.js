(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"],{

/***/ "./src/app/add-product/add-product.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-product/add-product.module.ts ***!
  \***************************************************/
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
/* harmony import */ var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product.page */ "./src/app/add-product/add-product.page.ts");








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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());



/***/ }),

/***/ "./src/app/add-product/add-product.page.html":
/*!***************************************************!*\
  !*** ./src/app/add-product/add-product.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-back-button slot=\"start\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title text-center>Add Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"addProductForm\" (ngSubmit)=\"onAddProduct()\">\n    <ion-input formControlName=\"product_name\" type=\"text\" placeholder=\"Product Name\"></ion-input>\n    <ion-input formControlName=\"product_quantity\" type=\"number\" placeholder=\"Quantity\"></ion-input>\n    <ion-input formControlName=\"product_price\" type=\"number\" placeholder=\"Price\"></ion-input>\n    <ion-input formControlName=\"product_tax\" type=\"number\" placeholder=\"Tax\"></ion-input>\n    <ion-button color=\"secondary\" margin-top expand=\"block\" type=\"submit\" [disabled]=\"addProductForm.invalid\">Add Product</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-product/add-product.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-product/add-product.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-product/add-product.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-product/add-product.page.ts ***!
  \*************************************************/
/*! exports provided: AddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPage", function() { return AddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddProductPage = /** @class */ (function () {
    function AddProductPage(_DB, _FB, _router) {
        this._DB = _DB;
        this._FB = _FB;
        this._router = _router;
    }
    AddProductPage.prototype.ngOnInit = function () {
        this.addProductForm = this._FB.group({
            product_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            product_quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)],
            product_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)],
            product_tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]
        });
    };
    AddProductPage.prototype.onAddProduct = function () {
        var _this = this;
        if (this.addProductForm.valid) {
            console.log("Form page: ", this.addProductForm.value);
            var data_1 = this.addProductForm.value;
            this._DB.addProduct(data_1.product_name, data_1.product_quantity, data_1.product_price, data_1.product_tax)
                .then(function () {
                console.log("One Product Row Created and i.e ", data_1);
                _this._DB.retrieveProductRecords()
                    .then(function () {
                    console.log("Data has Retrieved");
                    _this._DB.exportAsJSON();
                }).then(function (data) { return console.log("Exported in JSON: ", data); });
            }).then(function () {
                _this.addProductForm.reset();
                _this._router.navigate(['/home']);
            }).catch(function (e) { return console.log(e); });
        }
    };
    AddProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.page.html */ "./src/app/add-product/add-product.page.html"),
            styles: [__webpack_require__(/*! ./add-product.page.scss */ "./src/app/add-product/add-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseProviderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddProductPage);
    return AddProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-product-add-product-module.js.map