import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { SpecialToSpacePipe } from './shared/pipes/special-to-space.pipe';

@NgModule({
  declarations: [AppComponent, ProductListComponent, SpecialToSpacePipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
