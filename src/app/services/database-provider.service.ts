import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

import { Product } from "../DATA_MODELS/product";
import { Item } from "../DATA_MODELS/item";
import { Invoice } from "../DATA_MODELS/invoice";

@Injectable({
   providedIn: 'root'
})
export class DatabaseProviderService {

   private _DB: SQLiteObject;
   private _DB_NAME: string = "Sample_Invoice.db";


   constructor(
      public http: HttpClient,
      private _SQL: SQLite,
      private _PORTER: SQLitePorter
   ) { }

   // Create and initialize Database
   loadDB() {
      // Define the application SQLite database
      return this._SQL.create({
         name: this._DB_NAME,
         location: 'default'
      }).then((db: SQLiteObject) => {
         // Associate the database handler object with the _DB private property
         this._DB = db;
         console.log('Sample_Invoice database created !');
      }).catch((e) => console.log(e));
   }

   // Create different tables in Database
   createTables() {
      return this._DB.executeSql(
         `CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name TEXT,
            price REAL,
            tax REAL)`, [])
         .then(() => {
            console.log('Products Table Created !');
            return this._DB.executeSql(
               `CREATE TABLE IF NOT EXISTS items (
                  id TEXT,
                  product_id TEXT PRIMARY KEY,
                  product_name TEXT,
                  product_quantity INTEGER,
                  product_price REAL,
                  product_tax REAL)`, [])
         }).then(() => {
               console.log('Items Table Created !');
               return this._DB.executeSql(
                  `CREATE TABLE IF NOT EXISTS invoices (
                     id TEXT,
                     created_at TEXT,
                     billed_amt REAL)`, [])
         }).then(() => console.log('Invoices Table Created !'))
         .catch((e) => console.log(e));
   }

   // Check whether data is availabe in existing Database
   dataExistsCheck(tableName: string) {
      return this._DB.executeSql('SELECT count(*) AS numRows FROM ' + tableName, [])
         .then((data) => {
            // console.log("Data with rows: ", data)
            var numRows = data.rows.item(0).numRows;
            console.log('Data Existence', numRows)
            return numRows;
         }).catch((e) => console.log(e));
   }

   // Delete the complete Database
   clear() {
      return this._PORTER.wipeDb(this._DB)
         .then((data) => {
            console.log(data)
            return data
         }).catch((e) => console.log(e))
   }


   // ====================== PRODUCT CRUD SECTION STARTS FROM HERE ==========================
   createProduct(id: string, name: string, price: number, tax: number) {
      // id should be in text format and unique and also generated automatically
      let productData = [id, name, price, tax]
      return this._DB.executeSql(
         `INSERT INTO products (
            id, 
            name, 
            price, 
            tax 
            ) VALUES (?, ?, ?, ?)`, productData)
         .then(() => {
            console.log("One product is added in products table with these data ", productData)
            this.readAllProduct()
         })
         .catch((e) => console.log(e));
   }

   getProductInfo(product_id: string) {
      return this._DB.executeSql(
         `SELECT 
            id, 
            name, 
            price, 
            tax 
         FROM products WHERE id=?`, [product_id])
         .then((data) => {
            return {
               id: data.rows.item(0).id,
               name: data.rows.item(0).name,
               price: data.rows.item(0).price,
               tax: data.rows.item(0).tax,
            }
         }).then(productInfo => {
            console.log('Product Info: ', productInfo)
            return productInfo
         }).catch(e => console.log(e))
   }

   readAllProduct() {
      return this._DB.executeSql(
         `SELECT 
            id, 
            name, 
            price, 
            tax 
         FROM products`, [])
         .then((data) => {
            let products = [];
            if (data.rows.length > 0) {
               // iterate through returned records and push as nested objects into products array
               for (var k = 0; k < data.rows.length; k++) {
                  products.push({
                     id: data.rows.item(k).id,
                     name: data.rows.item(k).name,
                     price: data.rows.item(k).price,
                     tax: data.rows.item(k).tax
                  });
               }
            }
            console.log('Reading all products available: ', products)
            return products
         }).catch((e) => console.log(e));
   }

   updateProductInfo(prod: Product) {
      let updatedProductData = [prod.name, prod.price, prod.tax]
      console.log("Data to Update from Database Service: ", prod)
      return this._DB.executeSql(
         `UPDATE products 
            SET 
               name = ?, 
               price = ?, 
               tax = ? 
            WHERE id = ${prod.id}`, updatedProductData)
         .then(() => {
            console.log("Product info get updated successfully with these data ", updatedProductData)
            this.readAllProduct()
         })
         .catch((e) => console.log(e));
   }

   deleteProduct(product_id: string) {
      return this._DB.executeSql(
         `DELETE 
            FROM products 
            WHERE id=?`, [product_id])
         .then(() => {
            console.log('Product Deleted Successfully with product_id ', product_id)
            this.readAllProduct()
         })
         .catch(e => console.log(e))
   }
   // ===================== PRODUCT CRUD SECTION ENDS HERE =======================


   // ==================== ITEM CRUD SECTION STARTS FROM HERE ====================
   createItem(
      id: string,
      product_id: string,
      product_name: string,
      product_quantity: number,
      product_price: number,
      product_tax: number
   ) {
      // id should be in text format and unique and also generated automatically
      let itemData = [id, product_id, product_name, product_quantity, product_price, product_tax]
      return this._DB.executeSql(
         `INSERT INTO item (
            id, 
            product_id, 
            product_name, 
            product_quantity, 
            product_price, 
            product_tax 
            ) VALUES (?, ?, ?, ?, ?, ?)`, itemData)
         .then(() => console.log("One item is Inserted in items table with these data ", itemData))
         .catch(e => console.log(e))
   }

   getItemInfo(item_id: string) {
      return this._DB.executeSql(
         `SELECT 
            id, 
            product_id, 
            product_name, 
            product_quantity, 
            product_price, 
            product_tax 
         FROM items WHERE id=?`, [item_id])
         .then((data) => {
            return {
               id: data.rows.item(0).id,
               product_id: data.rows.item(0).product_id,
               product_name: data.rows.item(0).product_name,
               product_quantity: data.rows.item(0).product_quantity,
               product_price: data.rows.item(0).product_price,
               product_tax: data.rows.item(0).product_tax,
            }
         }).then(itemInfo => {
            console.log("Item Info: ", itemInfo)
            return itemInfo
         }).catch(e => console.log(e))
   }

   readAllItem() {
      return this._DB.executeSql(
         `SELECT 
            id, 
            product_id, 
            product_name, 
            product_quantity, 
            product_price, 
            product_tax 
         FROM items`, [])
         .then((data) => {
            let items = [];
            if (data.rows.length > 0) {
               // iterate through returned records and push as nested objects into items array
               for (var k = 0; k < data.rows.length; k++) {
                  items.push({
                     id: data.rows.item(k).id,
                     product_id: data.rows.item(k).product_id,
                     product_name: data.rows.item(k).product_name,
                     product_quantity: data.rows.item(k).product_quantity,
                     product_price: data.rows.item(k).product_price,
                     product_tax: data.rows.item(k).product_tax
                  });
               }
            }
            console.log('Reading all items available: ', items)
            return items
         }).catch((e) => console.log(e));
   }

   updateItemInfo(item: Item) {
      let updatedItemInfo = [item.product_quantity, item.product_price, item.product_tax]
      return this._DB.executeSql(
         `UPDATE items 
            SET 
               product_quantity=?,
               product_price=?,
               product_tax=? 
            WHERE id=${item.id}`, updatedItemInfo)
         .then(() => console.log("Item info get updated successfully with these data ", updatedItemInfo))
         .catch((e) => console.log(e));
   }

   deleteItem(item_id: string) {
      return this._DB.executeSql(
         `DELETE 
            FROM items 
            WHERE id=?`, [item_id])
         .then(() => console.log('Item Deleted Successfully with item_id ', item_id))
         .catch(e => console.log(e))
   }
   // =================== ITEM CRUD SECTION ENDS HERE =======================


   // ==================== INVOICE CRUD SECTION STARTS FROM HERE ====================
   createInvoice(id: string, created_at: string, billed_amt: number) {
      // id should be in text format and unique and also generated automatically
      let invoiceData = [id, created_at, billed_amt]
      return this._DB.executeSql(
         `INSERT INTO invoices (
            id, 
            created_at, 
            billed_amt
            ) VALUES (?, ?, ?, ?)`, invoiceData)
         .then(() => console.log("One invoice is Inserted in invoices table with these data ", invoiceData))
         .catch(e => console.log(e))
   }

   readAllInvoice() {
      return this._DB.executeSql(`
         SELECT 
            id, 
            billed_amt, 
            created_at  
         FROM invoice`, [])
         .then((data) => {
            let invoices = [];
            if (data.rows.length > 0) {
               // iterate through returned records and push as nested objects into invoices array
               for (var k = 0; k < data.rows.length; k++) {
                  invoices.push({
                     id: data.rows.item(k).id,
                     billed_amt: data.rows.item(k).billed_amt,
                     created_at: data.rows.item(k).created_at
                  });
               }
            }
            console.log('Reading all invoice available: ', invoices)
            return invoices
         }).catch((e) => console.log(e));
   }

   deleteInvoice(invoice_id: string) {
      return this._DB.executeSql(
         `DELETE 
            FROM invoices 
            WHERE id=?`, [invoice_id])
         .then(() => console.log('Invoice Deleted Successfully with invoice_id ', invoice_id))
         .catch(e => console.log(e))
   }
   // ==================== INVOICE CRUD SECTION ENDS HERE ====================


   // ============ EXPORT AND IMPORT DATABASE IN DIFFERENT FORMATS ==============
   importSQL(sql) {
      return this._PORTER.importSqlToDb(this._DB, sql)
         .then((data) => {
            console.log(data)
            return data
         }).catch((e) => console.log(e))
   }

   exportAsSQL() {
      return this._PORTER.exportDbToSql(this._DB)
         .then((data) => {
            console.log(data)
            return data
         }).catch((e) => console.log(e))
   }

   importJSON(json) {
      return this._PORTER.importJsonToDb(this._DB, json)
         .then((data) => {
            console.log(data)
            return data
         }).catch((e) => console.log(e))
   }

   exportAsJSON() {
      return this._PORTER.exportDbToJson(this._DB)
         .then((data) => {
            console.log(data)
            return data
         }).catch((e) => console.log(e))
   }


   // Generate A Unique ID
   generateRandomID() {
      let data = Math.random();
      let id = data.toString(16).substring(2, 8)
      return id;
   }
}
