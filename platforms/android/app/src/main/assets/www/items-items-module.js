(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items.page */ "./src/app/items/items.page.ts");







var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/items/items.page.html":
/*!***************************************!*\
  !*** ./src/app/items/items.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"invoices\"></ion-back-button>\n    </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button mode=\"md\" (click)=\"moreOptions($event)\">\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    <ion-title>Invoice Creation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"4\" text-start><strong><small>Product Name</small></strong></ion-col>\n            <ion-col size=\"2\" text-end><strong><small>Qty.</small></strong></ion-col>\n            <ion-col size=\"2\" text-end><strong><small>Price (Rs.)</small></strong></ion-col>\n            <ion-col size=\"2\" text-end><strong><small>Tax (%)</small></strong></ion-col>\n            <ion-col size=\"2\" text-end><strong><small>Total (Rs.)</small></strong></ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-list *ngIf=\"hideOrShow === false\">\n\n    <ion-item-sliding *ngFor=\"let item of _dataRecived; let i=index;\">\n        <!-- | orderBy: order:'case-insensitive' -->\n\n      <ion-item mode=\"md\" lines=\"full\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" text-start>{{item.name}}</ion-col>\n                <ion-col size=\"2\" text-end>\n                    <ion-input type=\"number\" [(ngModel)]=\"item.quantity\" (ionChange)=\"getQuantity($event, item, i)\" debounce=\"500\"></ion-input>\n                </ion-col>\n                <ion-col size=\"2\" text-end>{{item.price}}</ion-col>\n                <ion-col size=\"2\" text-end>{{item.tax}}</ion-col>\n                <ion-col size=\"2\" text-end>{{item.total}}</ion-col>\n              </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"removeFromList()\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"7\" text-start>\n          <strong>Total Ammount: </strong>\n        </ion-col>\n        <ion-col size=\"5\" text-end>\n          <strong>{{ billedAmt }}</strong>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"secondary\" expand=\"block\" (click)=\"generateNewInvoice()\">Generate Invoice</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/items/items.page.scss":
/*!***************************************!*\
  !*** ./src/app/items/items.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-list ion-item ion-row ion-col ion-input {\n  border: 2px solid #959ba1;\n  border-radius: 3px;\n  width: 100%;\n  height: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaGlyZW5kcmEvRGVza3RvcC9ERVYvdW52aXJlZC9zcWxpdGUtZGItaW52b2ljZS9zcmMvYXBwL2l0ZW1zL2l0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU13Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNDksIDE1NSwgMTYxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/items/items.page.ts":
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database-provider.service */ "./src/app/services/database-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover/popover.page */ "./src/app/items/popover/popover.page.ts");






var ItemsPage = /** @class */ (function () {
    function ItemsPage(_DB, _route, _router, _PC) {
        var _this = this;
        this._DB = _DB;
        this._route = _route;
        this._router = _router;
        this._PC = _PC;
        this._dataRecived = null;
        this.sendToInvoices = [];
        this.composeData = {};
        this.enteredQuantities = [];
        this.subTotal = [];
        this.itemsFlag = "items";
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this._dataRecived = _this._router.getCurrentNavigation().extras.state.data;
                console.log("This data recieved from products page: ", _this._dataRecived);
                _this.hideOrShow = _this._dataRecived.includes('invoices');
                console.log("Hide Or Show Value: ", _this.hideOrShow);
            }
        });
        this.billedAmt = 0;
        this.sendToInvoices.length = 0;
        console.log("After Sending Data to Invoices, Values in SendToInvoices: ", this.sendToInvoices);
        this.itemId = this.generateRandomID();
        console.log("Id Generated for new Items: ", this.itemId);
    }
    ItemsPage.prototype.ngOnInit = function () { };
    // Create PopOver to get more options for user
    ItemsPage.prototype.moreOptions = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popOver;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._PC.create({
                            component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"],
                            componentProps: { dataToSend: this._dataRecived },
                            event: ev,
                            animated: true,
                            translucent: true,
                            backdropDismiss: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popOver = _a.sent();
                        popOver.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Get Quantity of Product from User
    ItemsPage.prototype.getQuantity = function (ev, itemObj, ind) {
        this.totalNoOfItems = this._dataRecived.length;
        console.log("Total no. of Items Recieved: ", this.totalNoOfItems);
        for (var i = 0; i < this.totalNoOfItems; i++) {
            if (ind === i) {
                console.log("Index At: ", ind);
                this.enteredQuantities[ind] = parseInt(ev.target.value);
                this.quantity = this.enteredQuantities[ind];
                if (isNaN(this.enteredQuantities[ind])) {
                    this.enteredQuantities[ind] = 0;
                }
                // To store items into Database
                var composeData = {
                    'item_id': this.itemId,
                    'product_id': itemObj.id,
                    'product_name': itemObj.name,
                    'product_quantity': this.enteredQuantities[ind],
                    'product_price': itemObj.price,
                    'product_tax': itemObj.tax
                };
                this.sendToInvoices.push(composeData);
                this._DB.createItem(this.itemId, itemObj.id, itemObj.name, this.enteredQuantities[ind], itemObj.price, itemObj.tax)
                    .then(function () { return console.log("New item row has added Items Table"); })
                    .catch(function (e) { return console.log(e); });
            }
            console.log("Quantity entered for this object: ", itemObj);
            console.log("1. Quantity entered " + this.enteredQuantities[ind] + " and type of quantity = " + typeof (this.enteredQuantities[ind]));
            console.log("2. Product price is " + itemObj.price + " and type of quantity = " + typeof (itemObj.price));
            console.log("3. Product tax is " + itemObj.tax + " and type of quantity = " + typeof (itemObj.tax));
            itemObj.total = this.enteredQuantities[ind] * (itemObj.price + ((itemObj.tax / 100) * itemObj.price));
            this.subTotal[ind] = itemObj.total;
        }
        this.billedAmt = this.subTotal.reduce(function (a, b) { return a + b; });
    };
    // Remove invoice from item list shown over screen not from item table
    ItemsPage.prototype.removeFromList = function () {
        console.log("Remove From List Button Clicked");
    };
    // Generate New Invoice with updated billedAmt
    ItemsPage.prototype.generateNewInvoice = function () {
        var dataToSendToInvoices = {
            state: {
                data_1: this.billedAmt,
                data_2: this.sendToInvoices
            }
        };
        this._router.navigate(['/invoices'], dataToSendToInvoices);
    };
    // Generate A Unique ID
    ItemsPage.prototype.generateRandomID = function () {
        var data = Math.random();
        var id = data.toString(16).substring(2, 8);
        return id;
    };
    ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.page.html */ "./src/app/items/items.page.html"),
            styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/items/items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=items-items-module.js.map