(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"],{

/***/ "./src/app/invoices/invoices.module.ts":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.module.ts ***!
  \*********************************************/
/*! exports provided: InvoicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices.page */ "./src/app/invoices/invoices.page.ts");







var routes = [
    {
        path: '',
        component: _invoices_page__WEBPACK_IMPORTED_MODULE_6__["InvoicesPage"]
    }
];
var InvoicesPageModule = /** @class */ (function () {
    function InvoicesPageModule() {
    }
    InvoicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoices_page__WEBPACK_IMPORTED_MODULE_6__["InvoicesPage"]]
        })
    ], InvoicesPageModule);
    return InvoicesPageModule;
}());



/***/ }),

/***/ "./src/app/invoices/invoices.page.html":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Invoices\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Present Invoices -->\n  <ion-list>\n    <ion-item lines=\"full\" mode=\"md\" *ngFor=\"let invoice of invoices\" (click)=\"showInvoice(invoice)\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\" text-start><small>ID:</small></ion-col>\n          <ion-col size=\"8\" text-end><small>{{ invoice.id }}</small></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"4\" text-start><small>Created at:</small></ion-col>\n            <ion-col size=\"8\" text-end><small>{{ invoice.created_at | date: 'hh:mm:ss a d/MM/y'}}</small></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" text-start><small>Total Invoice Value:</small></ion-col>\n          <ion-col size=\"6\" text-end><small>{{ invoice.billed_amt }} Rs.</small></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <!-- Ionic Fab Button to provide more options for user -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n\n      <ion-fab-list side=\"top\">\n\n        <!--  1.Export in JSON  2.Product List 3.Create New Invoice  -->\n        <ion-fab-button (click)=\"exportDbInJSON()\">\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Export in JSON</ion-label>\n\n        <ion-fab-button (click)=\"loadProductList()\">\n          <ion-icon name=\"list\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Product List</ion-label>\n        \n        <ion-fab-button (click)=\"createNewInvoice()\">\n          <ion-icon name=\"create\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Create New Invoice</ion-label>\n          \n      </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/invoices/invoices.page.scss":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  margin-left: 140px;\n  overflow: visible;\n  position: relative;\n  --background: #0cd1e8; }\n  ion-fab-button ion-icon {\n    color: white; }\n  ion-fab-list ion-label {\n  position: relative;\n  top: 40px;\n  right: 25px;\n  color: white;\n  background-color: #0cd1e8;\n  line-height: 18px;\n  padding: 4px 8px;\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaGlyZW5kcmEvRGVza3RvcC9ERVYvdW52aXJlZC9zcWxpdGUtZGItaW52b2ljZS9zcmMvYXBwL2ludm9pY2VzL2ludm9pY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFhLEVBQUE7RUFKZjtJQU9JLFlBQVksRUFBQTtFQUloQjtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFFekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL2ludm9pY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWJhY2tncm91bmQ6ICMwY2QxZTg7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5pb24tZmFiLWxpc3Qge1xuICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwY2QxZTg7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/invoices/invoices.page.ts":
/*!*******************************************!*\
  !*** ./src/app/invoices/invoices.page.ts ***!
  \*******************************************/
/*! exports provided: InvoicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPage", function() { return InvoicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database-provider.service */ "./src/app/services/database-provider.service.ts");




var InvoicesPage = /** @class */ (function () {
    function InvoicesPage(_route, _router, _DB) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._DB = _DB;
        this.invoices = [];
        this._invoiceAmt = null;
        this.invoice = {};
        this.composeArray = [];
        this.dataToShowInvoice = [];
        // Generate Flag to control the data passed over navigation
        this.invoicesFlag = "invoices";
        // Check for Parameters recieved
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this._invoiceAmt = _this._router.getCurrentNavigation().extras.state.data_1;
                _this.dataToShowInvoice = _this._router.getCurrentNavigation().extras.state.data_2;
                console.log("Data to Show In Invoice", _this.dataToShowInvoice);
                if (_this._invoiceAmt) {
                    console.log("1. Invoice amount from Create Invoice Page: ", _this._invoiceAmt);
                    _this.invoice.id = _this.dataToShowInvoice[0].item_id;
                    _this.invoice.created_at = new Date().toLocaleString();
                    _this.invoice.billed_amt = _this._invoiceAmt;
                    console.log("2. Invoice property with its updated Data: ", _this.invoice);
                    // this.invoices.push(this.invoice)
                    // console.log("3. So Now the complete Invoices is: ", this.invoices)
                    _this._DB.createInvoice(_this.invoice)
                        .then(function () {
                        console.log('One invoice row added in invoices table with these data', _this.invoice);
                        _this._DB.readAllInvoice()
                            .then(function (data) {
                            console.log("this data will be invoices: ", data);
                            _this.invoices = data;
                            console.log("From invoices page total invoices are: ", _this.invoices);
                        });
                    }).catch(function (e) { return console.log(e); });
                }
                else {
                    console.log("Invoice amount not generated");
                }
            }
        });
        this.composeArray.length = 0;
    }
    InvoicesPage.prototype.ngOnInit = function () {
        // Load all invoices
        this._DB.readAllInvoice().catch(function (e) { return console.log(e); });
    };
    InvoicesPage.prototype.showInvoice = function (invObj) {
        console.log("Tapped Value: ", invObj);
        var dataToSend = {
            state: {
                data: invObj
            }
        };
        this._router.navigate(['/invoice'], dataToSend);
    };
    InvoicesPage.prototype.createNewInvoice = function () {
        this.composeArray.push(this.invoicesFlag);
        var dataToSend = {
            state: {
                data: this.composeArray
            }
        };
        this._router.navigate(['/items'], dataToSend);
    };
    InvoicesPage.prototype.loadProductList = function () {
        var dataToSend = {
            state: {
                data: this.invoicesFlag
            }
        };
        this._router.navigate(['/products'], dataToSend);
    };
    InvoicesPage.prototype.exportDbInJSON = function () {
        this._DB.exportAsJSON();
    };
    // Generate A Unique ID
    InvoicesPage.prototype.generateRandomID = function () {
        var data = Math.random();
        var id = data.toString(16).substring(2, 8);
        return id;
    };
    InvoicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.page.html */ "./src/app/invoices/invoices.page.html"),
            styles: [__webpack_require__(/*! ./invoices.page.scss */ "./src/app/invoices/invoices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseProviderService"]])
    ], InvoicesPage);
    return InvoicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=invoices-invoices-module.js.map