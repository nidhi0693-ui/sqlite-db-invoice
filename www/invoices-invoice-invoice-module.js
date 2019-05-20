(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoice-invoice-module"],{

/***/ "./src/app/invoices/invoice/invoice.module.ts":
/*!****************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.module.ts ***!
  \****************************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.page */ "./src/app/invoices/invoice/invoice.page.ts");







var routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]
    }
];
var InvoicePageModule = /** @class */ (function () {
    function InvoicePageModule() {
    }
    InvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
        })
    ], InvoicePageModule);
    return InvoicePageModule;
}());



/***/ }),

/***/ "./src/app/invoices/invoice/invoice.page.html":
/*!****************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" defaultHref=\"invoices\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-item lines=\"full\">\n          <ion-grid>\n              <ion-row>\n                  <ion-col size=\"5\" text-start><strong><small>Product Name</small></strong></ion-col>\n                  <ion-col size=\"2\" text-end><strong><small>Qty.</small></strong></ion-col>\n                  <ion-col size=\"3\" text-end><strong><small>Price (Rs.)</small></strong></ion-col>\n                  <ion-col size=\"2\" text-end><strong><small>Tax (%)</small></strong></ion-col>\n                  <!-- <ion-col size=\"2\" text-end><strong><small>Total (Rs.)</small></strong></ion-col> -->\n                </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-list>\n          <ion-item lines=\"full\" *ngFor=\"let data of dataToShow\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"5\" text-start><small>{{ data.product_name }}</small></ion-col>\n                    <ion-col size=\"2\" text-end><small>{{ data.product_quantity }}</small></ion-col>\n                    <ion-col size=\"3\" text-end><small>{{ data.product_price }}</small></ion-col>\n                    <ion-col size=\"2\" text-end><small>{{ data.product_tax }}</small></ion-col>\n                    <!-- <ion-col size=\"2\" text-end><strong><small>Total (Rs.)</small></strong></ion-col> -->\n                  </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"secondary\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" text-start><strong>Created At</strong></ion-col>\n        <ion-col size=\"6\" text-end><strong>Invoice Amount</strong></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" text-start>{{ dataRecieved.created_at }}</ion-col>\n        <ion-col size=\"6\" text-end>{{ dataRecieved.billed_amt }}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/invoices/invoice/invoice.page.scss":
/*!****************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL2ludm9pY2UvaW52b2ljZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/invoices/invoice/invoice.page.ts":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.page.ts ***!
  \**************************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database-provider.service */ "./src/app/services/database-provider.service.ts");




var InvoicePage = /** @class */ (function () {
    function InvoicePage(_DB, _route, _router) {
        var _this = this;
        this._DB = _DB;
        this._route = _route;
        this._router = _router;
        this.dataRecieved = null;
        this.dataToShow = null;
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this.dataRecieved = _this._router.getCurrentNavigation().extras.state.data;
                console.log("Invoice is Recieved with these data: ", _this.dataRecieved);
                _this.invId = _this.dataRecieved.id;
                console.log("For this Id " + _this.invId + " generate invoice");
                _this._DB.getItemInfo(_this.invId)
                    .then(function (data) {
                    console.log("Data for item_id: ", data);
                    _this.dataToShow = data;
                })
                    .catch(function (e) { return console.log(e); });
            }
        });
    }
    InvoicePage.prototype.ngOnInit = function () {
    };
    InvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.page.html */ "./src/app/invoices/invoice/invoice.page.html"),
            styles: [__webpack_require__(/*! ./invoice.page.scss */ "./src/app/invoices/invoice/invoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_provider_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvoicePage);
    return InvoicePage;
}());



/***/ })

}]);
//# sourceMappingURL=invoices-invoice-invoice-module.js.map