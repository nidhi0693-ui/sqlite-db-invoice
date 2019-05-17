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

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Invoices\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Present Invoices -->\n  <ion-list>\n    <ion-item lines=\"full\" mode=\"md\" *ngFor=\"let invoice of invoices\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\" text-start><small><strong>ID:</strong></small></ion-col>\n          <ion-col size=\"2\" text-end>{{ invoice.id }}</ion-col>\n          <ion-col size=\"4\" text-start><small><strong>Created at:</strong></small></ion-col>\n          <ion-col size=\"5\" text-end>{{ invoice.created_at }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" text-start><small><strong>Total Invoice Value:</strong></small></ion-col>\n          <ion-col size=\"6\" text-end><small><strong>{{ invoice.billed_amt }}</strong></small></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <!-- Ionic Fab Button to provide more options for user -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\n    <ion-fab-button color=\"secondary\">\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n\n      <ion-fab-list side=\"top\">\n\n        <!--  1.Export in JSON  2.Product List 3.Create New Invoice  -->\n        <ion-fab-button (click)=\"exportDbInJSON()\">\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Export in JSON</ion-label>\n\n        <ion-fab-button (click)=\"loadProductList()\">\n          <ion-icon name=\"list\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Product List</ion-label>\n        \n        <ion-fab-button (click)=\"createNewInvoice()\">\n          <ion-icon name=\"create\"></ion-icon>\n        </ion-fab-button>\n        <ion-label>Create New Invoice</ion-label>\n          \n      </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/invoices/invoices.page.scss":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  margin-left: 140px;\n  overflow: visible;\n  position: relative;\n  --background: #0cd1e8; }\n  ion-fab-button ion-icon {\n    color: white; }\n  ion-fab-list ion-label {\n  position: relative;\n  top: 40px;\n  right: 25px;\n  color: white;\n  background-color: #0cd1e8;\n  line-height: 18px;\n  padding: 4px 8px;\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaGlyZW5kcmEvRGVza3RvcC9ERVYvdW52aXJlZC9zcWxpdGUtZGItaW9uaWMvc3JjL2FwcC9pbnZvaWNlcy9pbnZvaWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBYSxFQUFBO0VBSmY7SUFPSSxZQUFZLEVBQUE7RUFJaEI7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBRXpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlcy9pbnZvaWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMGNkMWU4O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuaW9uLWZhYi1saXN0IHtcbiAgaW9uLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNkMWU4O1xuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59Il19 */"

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
        // localData: Date
        this.invoice = {};
        // Generate Flag to control the data passed over navigation
        this.invoicesFlag = {
            pageName: "Invoices",
            content: "Hey! I am from Invoices Page"
        };
        this._route.queryParams.subscribe(function (params) {
            if (_this._router.getCurrentNavigation().extras.state) {
                _this._invoiceAmt = _this._router.getCurrentNavigation().extras.state.data;
                if (_this._invoiceAmt) {
                    console.log("1. Invoice amount from Create Invoice Page: ", _this._invoiceAmt);
                    _this.invoice.id = _this.generateRandomID();
                    _this.invoice.created_at = new Date().toLocaleString();
                    _this.invoice.billed_amt = _this._invoiceAmt;
                    console.log("2. Invoice property with its updated Data: ", _this.invoice);
                    _this.invoices.push(_this.invoice);
                    console.log("3. So Now the complete Invoices is: ", _this.invoices);
                }
                else {
                    console.log("Invoice amount not generated");
                }
            }
        });
    }
    InvoicesPage.prototype.ngOnInit = function () {
    };
    InvoicesPage.prototype.createNewInvoice = function () {
        var dataToSend = {
            state: {
                data: this.invoicesFlag
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