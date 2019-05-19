import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  { path: 'invoices', loadChildren: './invoices/invoices.module#InvoicesPageModule' },

  { path: 'items', loadChildren: './items/items.module#ItemsPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'products/:id', loadChildren: './products/product/product.module#ProductPageModule' },
  { path: 'add-product', loadChildren: './products/add-product/add-product.module#AddProductPageModule' },
  { path: 'update-product/:id', loadChildren: './products/update-product/update-product.module#UpdateProductPageModule' },
  { path: 'popover', loadChildren: './items/popover/popover.module#PopoverPageModule' },
  { path: 'invoice', loadChildren: './invoices/invoice/invoice.module#InvoicePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
