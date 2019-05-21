(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");








var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.html":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"invoices\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addProduct()\" mode=\"md\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"5\" text-start><strong><small>Product Name</small></strong></ion-col>\n            <ion-col size=\"3\" text-end><strong><small>Price (Rs.)</small></strong></ion-col>\n            <ion-col size=\"2\" text-end><strong><small>Tax (%)</small></strong></ion-col>\n            <ion-col size=\"2\" text-end *ngIf=\"dataRecieved.pageName === 'Create Invoice'\"><strong><small>Select</small></strong></ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let prod of _products | orderBy: order\" #slidingItem>\n      <ion-item mode=\"md\" lines=\"full\">\n        <ion-label>\n          <ion-grid>\n              <ion-row>\n                  <ion-col size=\"5\" text-start>{{ prod.name }}</ion-col>\n                  <ion-col size=\"4\" text-end>{{ prod.price }}</ion-col>\n                  <ion-col size=\"3\" text-end>{{ prod.tax }}%</ion-col>\n              </ion-row>\n          </ion-grid>\n        </ion-label>\n        <ion-checkbox slot=\"end\" mode=\"md\" (ionChange)=\"selectProduct($event, prod)\" *ngIf=\"dataRecieved.pageName === 'Create Invoice'\"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"warning\" (click)=\"showProductInfo(prod.id)\">\n          <ion-icon name=\"alert\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option color=\"primary\" (click)=\"updateProductInfo(prod)\">\n          <ion-icon name=\"create\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteProduct(prod.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf=\"dataRecieved.pageName === 'Create Invoice'\">\n  <ion-toolbar>\n    <ion-button (click)=\"markedData()\" color=\"secondary\" expand=\"block\" position=\"bottom\">Update Invoice</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ProductsPage = /** @class */ (function () {
    function ProductsPage(_DB, _route, _router, _TC
    // private orderPipe: OrderPipe
    ) {
        var _this = this;
        this._DB = _DB;
        this._route = _route;
        this._router = _router;
        this._TC = _TC;
        this._products = [];
        this._selectedProduct = [];
        this.dataRecieved = null;
        this.productsFlag = "products";
        this.order = 'name';
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this.dataRecieved = _this._router.getCurrentNavigation().extras.state.data;
                console.log("Data recived from " + _this.dataRecieved.pageName + " Page and content is " + _this.dataRecieved.content);
            }
        });
    }
    ProductsPage.prototype.ngOnInit = function () { };
    // In order to load updated data every time when page gets loaded
    ProductsPage.prototype.ionViewWillEnter = function () {
        this.loadProducts();
        this._products.map(function (data) {
            data.hasSelected = false;
        });
    };
    // Load the Products from Database
    ProductsPage.prototype.loadProducts = function () {
        var _this = this;
        this._DB.readAllProduct()
            .then(function (data) {
            _this._products = data;
            // this._products = this.orderPipe.transform(this._products, 'name')
            console.log("form products page loadProducts(): ", _this._products);
        }).catch(function (e) { return console.log(e); });
    };
    // Select Product'/s and send to items Page in order to generate Invoice
    ProductsPage.prototype.selectProduct = function (ev, data) {
        if (ev.target.checked === true) {
            data.hasSelected = true;
        }
        else {
            data.hasSelected = false;
        }
        this._selectedProduct = this._products.filter(function (res) {
            if (res.hasSelected === true) {
                return res;
            }
            else {
                return;
            }
        });
        console.log("selected Data To Send: ", this._selectedProduct);
    };
    ProductsPage.prototype.markedData = function () {
        var dataToSend = {
            state: {
                data: this._selectedProduct
            }
        };
        console.log("On products page dataSendToItemsPage", this._selectedProduct);
        this._router.navigate(['/items'], dataToSend);
    };
    //<-------Start CRUD operation on DB ------------------>
    // Add New Product into DB
    ProductsPage.prototype.addProduct = function () {
        this._router.navigate(['/add-product']);
    };
    // Get the Single Product Information from DB
    ProductsPage.prototype.showProductInfo = function (product_id) {
        this.slideItem.close();
        var dataToSend = {
            state: {
                data: product_id
            }
        };
        console.log("1. Data send from Products to Show Product Info: ", dataToSend);
        this._router.navigate(["/products/" + dataToSend.state.data], dataToSend);
    };
    // Update the Product Information into DB
    ProductsPage.prototype.updateProductInfo = function (prod) {
        this.slideItem.close();
        var dataToSend = {
            state: {
                data: prod
            }
        };
        console.log("2. Data send from Products to Update Product Info: ", dataToSend);
        this._router.navigate(["/update-product/" + dataToSend.state.data.product_id], dataToSend);
    };
    // Delete Product from DB
    ProductsPage.prototype.deleteProduct = function (product_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slideItem.close()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastForDelete(product_id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Perform Delete Operation Asynchronouslly
    ProductsPage.prototype.toastForDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._TC.create({
                            header: 'Delete Product',
                            message: 'Are you sure to delete product ?',
                            position: 'middle',
                            buttons: [
                                {
                                    text: 'Not Now',
                                    handler: function () {
                                        _this.cancleToast();
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this._DB.deleteProduct(id);
                                        _this.loadProducts();
                                        _this.deleteToast();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ProductsPage.prototype.cancleToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cancle;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._TC.create({
                            message: 'Product Not Deleted',
                            duration: 2000
                        })];
                    case 1:
                        cancle = _a.sent();
                        cancle.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.deleteToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deleteIt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._TC.create({
                            message: 'Product Deleted Successfully',
                            duration: 2000
                        })];
                    case 1:
                        deleteIt = _a.sent();
                        deleteIt.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidingItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItemSliding"])
    ], ProductsPage.prototype, "slideItem", void 0);
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_provider_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
            // private orderPipe: OrderPipe
        ])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map