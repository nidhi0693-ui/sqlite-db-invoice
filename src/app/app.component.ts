import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseProviderService } from './services/database-provider.service';

@Component({
   selector: 'app-root',
   templateUrl: 'app.component.html'
})
export class AppComponent {

   private tables = ['invoices', 'items', 'products']

   constructor(
      private _PLAT: Platform,
      private _splashScreen: SplashScreen,
      private _statusBar: StatusBar,
      private _DB: DatabaseProviderService
   ) {
      this.initializeApp();
   }

   initializeApp() {
      this._PLAT.ready().then(() => {
         this._statusBar.styleDefault();
         this._splashScreen.hide();
         this.loadRecords();
      });
   }

   loadRecords() {
      this._DB.loadDB().then(() => {
         this._DB.createTables().then(() => {
            this.tables.forEach((data) => {
               this._DB.dataExistsCheck(data).then((res) => {
                  if (res != 0) {
                     this._DB.readAllInvoice().then(() => {
                        this._DB.exportAsJSON();
                     })
                  } else {
                     console.log("No Data Available to Load ...");
                  }
               })
            })
         })
      }).catch((e) => console.log(e));
   }
}
