(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-product-module"],{

/***/ "./src/app/products/product/product.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/products/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/products/product/product.page.html":
/*!****************************************************!*\
  !*** ./src/app/products/product/product.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"products\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Product Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item margin-top>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-start><strong>Name: </strong></ion-col>\n            <ion-col text-end>{{ product.name }}</ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-start><strong>Product ID: </strong></ion-col>\n            <ion-col text-end>{{ product.id }}</ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-start><strong>Price: </strong></ion-col>\n            <ion-col text-end>{{ product.price }} Rs./Unit</ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-start><strong>Tax Applied: </strong></ion-col>\n            <ion-col text-end>{{ product.tax }}%</ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/products/product/product.page.scss":
/*!****************************************************!*\
  !*** ./src/app/products/product/product.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product/product.page.ts":
/*!**************************************************!*\
  !*** ./src/app/products/product/product.page.ts ***!
  \**************************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductPage = /** @class */ (function () {
    function ProductPage(_DB, _route, _router) {
        var _this = this;
        this._DB = _DB;
        this._route = _route;
        this._router = _router;
        this.recievedData = null;
        this.product = [];
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this.recievedData = _this._router.getCurrentNavigation().extras.state.data;
                console.log("1. Nav enters with this data to Show Product Info: ", _this.recievedData);
            }
        });
    }
    ProductPage.prototype.ngOnInit = function () {
        this.showProductInfo(this.recievedData);
    };
    ProductPage.prototype.showProductInfo = function (id) {
        var _this = this;
        this._DB.getProductInfo(id)
            .then(function (data) {
            _this.product = data;
        }).catch(function (e) { return console.log(e); });
    };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/products/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/products/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-product-product-module.js.map