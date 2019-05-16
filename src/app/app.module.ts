import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabaseProviderService } from './services/database-provider.service';
import { HttpClientModule } from '@angular/common/http';

// For SQLite
import { SQLite } from '@ionic-native/sqlite/ngx';                  // In order to Create Sqlite Database
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';     // In order to intracts with Sqlite Database (to import/export to/from a SQLite database using either SQL or JSON.)
import { IonicStorageModule } from '@ionic/storage';

import { ReactiveFormsModule } from '@angular/forms';
import { PopoverPageModule } from './items/popover/popover.module';

// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AppComponent],

  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    PopoverPageModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatInputModule, 
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatabaseProviderService, 
    SQLite,
    SQLitePorter
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
